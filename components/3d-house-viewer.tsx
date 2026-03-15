'use client'

import { useEffect, useRef, useState } from 'react'

export function House3DViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    // Check if Three.js is already loaded
    if ((window as any).THREE && (window as any).OrbitControls) {
      initializeScene()
      return
    }

    // Prevent multiple script loads
    let mounted = true

    // Load Three.js and OrbitControls from the same CDN
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/three@r128/build/three.min.js'
    script.async = true
    
    script.onload = () => {
      if (!mounted) return

      // Load OrbitControls
      const orbitScript = document.createElement('script')
      orbitScript.src = 'https://cdn.jsdelivr.net/npm/three@r128/examples/js/controls/OrbitControls.js'
      orbitScript.async = true
      
      orbitScript.onload = () => {
        if (mounted) {
          initializeScene()
        }
      }
      document.head.appendChild(orbitScript)
    }
    
    document.head.appendChild(script)

    return () => {
      mounted = false
    }

    function initializeScene() {
      if (!containerRef.current) return

      // Scene setup
      const THREE = (window as any).THREE
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x0a0a1a)
      scene.fog = new THREE.Fog(0x0a0a1a, 100, 500)

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      )
      camera.position.set(0, 15, 25)

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFShadowShadowMap
      containerRef.current.appendChild(renderer.domElement)

      // Controls
      const OrbitControls = (window as any).OrbitControls || (window as any).THREE.OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.enablePan = true
      controls.autoRotate = true
      controls.autoRotateSpeed = 2

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(10, 20, 10)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      directionalLight.shadow.camera.far = 50
      directionalLight.shadow.camera.left = -30
      directionalLight.shadow.camera.right = 30
      directionalLight.shadow.camera.top = 30
      directionalLight.shadow.camera.bottom = -30
      scene.add(directionalLight)

      const pointLight = new THREE.PointLight(0x4F46E5, 0.8)
      pointLight.position.set(10, 15, 10)
      scene.add(pointLight)

      // Create house structure
      const houseGroup = new THREE.Group()
      scene.add(houseGroup)

      // Foundation
      const foundationGeometry = new THREE.BoxGeometry(20, 1, 15)
      const foundationMaterial = new THREE.MeshStandardMaterial({ color: 0x8B8B7A })
      const foundation = new THREE.Mesh(foundationGeometry, foundationMaterial)
      foundation.castShadow = true
      foundation.receiveShadow = true
      foundation.position.y = -0.5
      houseGroup.add(foundation)

      // Main house body - First Floor
      const houseBodyGeometry = new THREE.BoxGeometry(18, 3.5, 13)
      const houseBodyMaterial = new THREE.MeshStandardMaterial({
        color: 0xE8D5C4,
        metalness: 0.1,
        roughness: 0.8,
      })
      const houseBody = new THREE.Mesh(houseBodyGeometry, houseBodyMaterial)
      houseBody.castShadow = true
      houseBody.receiveShadow = true
      houseBody.position.y = 2
      houseGroup.add(houseBody)

      // Second Floor
      const secondFloorGeometry = new THREE.BoxGeometry(14, 3.5, 10)
      const secondFloor = new THREE.Mesh(secondFloorGeometry, houseBodyMaterial)
      secondFloor.castShadow = true
      secondFloor.receiveShadow = true
      secondFloor.position.y = 6.5
      secondFloor.position.z = -1
      houseGroup.add(secondFloor)

      // Roof
      const roofGeometry = new THREE.ConeGeometry(13, 4, 4)
      const roofMaterial = new THREE.MeshStandardMaterial({
        color: 0xC41E3A,
        metalness: 0.2,
        roughness: 0.8,
      })
      const roof = new THREE.Mesh(roofGeometry, roofMaterial)
      roof.castShadow = true
      roof.receiveShadow = true
      roof.rotation.y = Math.PI / 4
      roof.position.y = 10.5
      roof.position.z = -1
      houseGroup.add(roof)

      // Windows - First Floor
      const windowGeometry = new THREE.BoxGeometry(1.5, 1.5, 0.2)
      const windowMaterial = new THREE.MeshStandardMaterial({
        color: 0x87CEEB,
        metalness: 0.3,
        roughness: 0.2,
      })

      const windowPositions = [
        [-6, 2.5, 6.5],
        [-3, 2.5, 6.5],
        [3, 2.5, 6.5],
        [6, 2.5, 6.5],
        [-6, 2.5, -6.5],
        [6, 2.5, -6.5],
      ]

      windowPositions.forEach((pos) => {
        const window = new THREE.Mesh(windowGeometry, windowMaterial)
        window.castShadow = true
        window.position.set(pos[0], pos[1], pos[2])
        houseGroup.add(window)
      })

      // Door
      const doorGeometry = new THREE.BoxGeometry(2, 2.5, 0.1)
      const doorMaterial = new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        metalness: 0.3,
        roughness: 0.6,
      })
      const door = new THREE.Mesh(doorGeometry, doorMaterial)
      door.castShadow = true
      door.position.set(0, 1, 6.5)
      houseGroup.add(door)

      // Chimney
      const chimneyGeometry = new THREE.BoxGeometry(1, 4, 1)
      const chimneyMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 })
      const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial)
      chimney.castShadow = true
      chimney.position.set(-8, 7, -5)
      houseGroup.add(chimney)

      // Ground
      const groundGeometry = new THREE.PlaneGeometry(100, 100)
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x2D5016,
        metalness: 0,
        roughness: 0.8,
      })
      const ground = new THREE.Mesh(groundGeometry, groundMaterial)
      ground.rotation.x = -Math.PI / 2
      ground.receiveShadow = true
      ground.position.y = -1
      scene.add(ground)

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()

      // Handle window resize
      function onWindowResize() {
        if (!containerRef.current) return
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }

      window.addEventListener('resize', onWindowResize)

      setIsLoading(false)
    }
  }, [])

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-background to-card">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10">
          <div className="text-center">
            <div className="inline-block animate-spin mb-4">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full" />
            </div>
            <p className="text-foreground font-semibold">Loading 3D Model...</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  )
}
