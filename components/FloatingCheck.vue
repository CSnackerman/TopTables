<template>
  <button @click="onFocus($event)">✔️</button>
</template>

<script setup lang="ts">
  function onFocus(event: any) {
    if (!event) return
    event.target?.focus()
    console.log(event)
  }
</script>

<style scoped lang="scss">
  div {
    //setup/vars
    all: unset;

    // filters
    filter: hue-rotate(180deg);// invert(100%);
    background-color: rgba(255, 255, 255, 0.205);

    // animation
    @keyframes floataway {
      from {  }
      to { transform: translate(0px 50px); }
    }

    &:hover {
      color: green;
      animation-name: floataway;
      animation: 1s forwards ease-out;
    }
  }
</style>