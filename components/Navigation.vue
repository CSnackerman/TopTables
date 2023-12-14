<template>
  <nav class="navigation">
      <NuxtLink to="/">Tune-a-Table</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
      <Burger />
  </nav>
</template>

<style scoped lang="scss">
    .navigation {
        user-select: none;
        display: flex;
        align-items: center; 
        justify-content: space-between;
        color: lightgreen;
        background-color: rgb(118, 21, 184);
        padding: 7px 2rem;
    }
</style>