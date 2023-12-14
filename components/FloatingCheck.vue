<template>
  <div>✔️</div>
</template>

<script setup lang="ts">
  function onFocus(e: Event) {
  }
</script>

<style scoped lang="scss">
  div {
    user-select: none; 

    @keyframes floataway {
      from { transform: translate(0px, 0px); }
      to { transform: translate(0px, -25px); }
    }

    animation: floataway 500ms alternate 4 ease-in-out;    
  }
</style>
134679