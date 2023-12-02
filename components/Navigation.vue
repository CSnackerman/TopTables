<template>
  <div class="navigation">
      <NuxtLink to="/">Tune-a-Table</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <Burger />
  </div>
</template>

<style scoped lang="scss">
    .navigation {
        display: flex;
        align-items: center; 
        justify-content: space-between;
        color: lightgreen;
        background-color: rgb(118, 21, 184);
        padding: 7px 2rem;
    }
</style>