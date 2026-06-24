import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'

const STAR_COUNT = 300

export default function StarField() {
  const mountRef = useRef(null)
  const rendererRef = useRef(null)
  const startTime = useRef(Date.now())

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      0, width, height, 0, -1, 1
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Generate star positions and random delays
    const positions = new Float32Array(STAR_COUNT * 3)
    const delays = new Float32Array(STAR_COUNT)
    const sizes = new Float32Array(STAR_COUNT)

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[i * 3] = Math.random() * width
      positions[i * 3 + 1] = Math.random() * height
      positions[i * 3 + 2] = 0
      delays[i] = Math.random() * 2.5 // stagger over 2.5s
      sizes[i] = 1 + Math.random() * 2.5
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aDelay', new THREE.BufferAttribute(delays, 1))
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float aDelay;
        attribute float aSize;
        varying float vAlpha;
        void main() {
          float t = clamp((uTime - aDelay) / 1.0, 0.0, 1.0);
          vAlpha = t;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * (0.6 + 0.4 * sin(uTime * 2.0 + aDelay * 10.0));
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vAlpha;
        void main() {
          float dist = length(gl_PointCoord - 0.5) * 2.0;
          float glow = 1.0 - smoothstep(0.0, 1.0, dist);
          vec3 color = mix(vec3(0.957, 0.788, 0.478), vec3(1.0), glow * 0.3);
          gl_FragColor = vec4(color, glow * vAlpha * 0.9);
        }
      `,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = (Date.now() - startTime.current) / 1000
      material.uniforms.uTime.value = elapsed
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      camera.right = w
      camera.top = h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
