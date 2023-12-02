<template>
  <div>
    <Navigation />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  :root {
    font-size: 20px;
  }
  html, body {
    font-family: sans-serif;
    background-color: rgb(51, 44, 54);
    color: rgb(201, 201, 201)
  }
  a { 
    all: unset;
    cursor: pointer;
    padding: 3px;
    &:hover { scale: 110%; filter:hue-rotate(-45deg);}
  }
  p { font-size: 0.8rem;}
</style>