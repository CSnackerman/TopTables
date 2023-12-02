<template>
    <div id="tWindow" ref="threeWindow"></div>
</template>

<script setup lang="ts">
    import * as THREE from 'three'

    const threeWindow = ref<HTMLDivElement>()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(800, 450)

    if (threeWindow.value) {
        threeWindow.value.appendChild(renderer.domElement)
        console.log('here')
    }
</script>