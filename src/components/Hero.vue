<template>
  <section id="home">
    <div id="hero"></div>
    <div class="container tagline">
      <h2>co-founder at equal time</h2>
      <h2>engineering manager at npr</h2>
    </div>
    <a
      href="#what"
      tabindex="0"
      class="scroll-down"
      v-smooth-scroll="{ duration: 1000 }"
      aria-label="scroll down past hero image"
    />
    <div id="smoke"></div>
  </section>
</template>

<script>
/* eslint-disable */
import * as THREE from 'three'

export default {
  mounted() {
    var camera,
      scene,
      renderer,
      geometry,
      material,
      mesh,
      clock,
      cubeSineDriver,
      smokeTexture,
      smokeMaterial,
      smokeGeo,
      smokeParticles,
      p,
      delta

    init()
    animate()

    async function init() {
      clock = new THREE.Clock()

      renderer = new THREE.WebGLRenderer({ alpha: true })
      renderer.setClearColor(0x000000, 0.1)
      renderer.setSize(window.innerWidth, window.innerHeight)

      scene = new THREE.Scene()

      var ambientLight = new THREE.AmbientLight(0xffffff)
      scene.add(ambientLight)

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      )
      camera.position.z = 1000
      scene.add(camera)

      geometry = new THREE.CubeGeometry(200, 200, 200)
      material = new THREE.MeshLambertMaterial({
        color: 0xf8cb8a,
        wireframe: false,
      })
      mesh = new THREE.Mesh(geometry, material)
      //scene.add( mesh );
      cubeSineDriver = 0
      smokeTexture = THREE.ImageUtils.loadTexture('images/smoke.png')
      smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xf8cb8a,
        opacity: 0.15,
        map: smokeTexture,
        transparent: true,
      })
      smokeGeo = new THREE.PlaneGeometry(300, 300)
      smokeParticles = []

      for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo, smokeMaterial)
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100,
        )
        particle.rotation.z = Math.random() * 360
        scene.add(particle)
        smokeParticles.push(particle)
      }

      document.getElementById('smoke').appendChild(renderer.domElement)
    }

    function animate() {
      delta = clock.getDelta()
      requestAnimationFrame(animate)
      evolveSmoke()
      render()
    }

    function evolveSmoke() {
      var sp = smokeParticles.length
      while (sp--) {
        smokeParticles[sp].rotation.z += delta * 0.2
      }
    }

    function render() {
      mesh.rotation.x += 0.005
      mesh.rotation.y += 0.01
      cubeSineDriver += 0.01
      mesh.position.z = 100 + Math.sin(cubeSineDriver) * 500
      renderer.render(scene, camera)
    }
  },
}
</script>
