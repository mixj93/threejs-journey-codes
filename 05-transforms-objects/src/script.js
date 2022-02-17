import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes helper
// https://threejs.org/docs/#api/en/helpers/AxesHelper
// The X axis is red. The Y axis is green. The Z axis is blue.
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

/**
 * Objects
 */
const group = new THREE.Group()
group.position.x = 0.7
group.position.y = -0.6
group.position.z = 1
group.scale.x = 2
group.scale.y = 0.25
group.scale.z = 0.5
group.rotation.x = Math.PI * 0.25
group.rotation.y = Math.PI * 0.25

scene.add(group)

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff0000 }))
group.add(cube1)

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x00ff00 }))
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }))
cube3.position.x = 2
group.add(cube3)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10
scene.add(camera)

// camera.lookAt(mesh.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
