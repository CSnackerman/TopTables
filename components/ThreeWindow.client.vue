<template>
    <div id="tWindow" ref="threeWindow"></div>
</template>

<script setup lang="ts">
    import * as THREE from 'three'

    let width = window.innerWidth / 2
    let height = window.innerHeight / 2

        // handle resizing
    window.addEventListener('resize', () => {
        width = window.innerWidth / 2
        height = window.innerHeight / 2

        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
    }, false)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();
</script>