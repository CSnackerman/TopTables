<template>
  <div>
    <svg width="301" height="301" version="1.1" viewBox="0 0 301 301">
      <rect x="24.000" y="45.000" width="250.000" height="23.000" rx="11" />
      <rect x="24.000" y="147.000" width="250.000" height="23.000" rx="11" />
      <rect x="24.000" y="246.000" width="250.000" height="23.000" rx="11" />
    </svg>
  </div>
</template>

<style scoped lang="scss">
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: min-content;
    padding: 3px 1px;
    // background-color: rgb(69, 103, 136); // debug
    // border-radius: 3px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  div:hover {
    scale: 110%;
  }

  svg {
    fill: rgb(27, 27, 27);
    width: 1.4rem;
    height: 1.1rem;
    
    // background-color: yellow; // debug
  }
</style>