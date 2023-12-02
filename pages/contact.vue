<template>
  <div class="contact">
    <h3>Colby Ackerman</h3>
    <div>
      colbyackerman@gmail.com
      <span @click="copyEmail">💌</span>
    </div>
    <div>
      +1-636-699-2060
      <span @click="copyPhone">📱</span>
    </div>
  </div>
  <p>Please do not hesitate to reach out if you have any issues!</p>
  <FloatingCheck />
</template>

<script setup lang="ts">
  const copyEmail = () => clipboardCopy('colbyackerman@gmail.com')
  const copyPhone = () => clipboardCopy('16366992060')
</script>

<style scoped lang="scss">
  .contact {
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    grid-template-rows:     1fr 1fr 1fr;
    white-space: nowrap;
    color: black;
    background-color: #e8e2e9;
    width: min-content;
    padding: 1.5rem;
    margin: 2rem auto;
    border: 2px solid purple;
    border-radius: 7px;
    filter: drop-shadow(10px 10px 4px #000000AA);
    
    
    h3 {
      grid-column: 2;
      padding: 0 0 0.7rem 0;
      text-align: center;
    }
    
    div {
      grid-column: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      
      span {
        user-select: none;
        padding-left: 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        &:hover {
          scale: 110%;
        }
      }

      &:nth-child(2)::before {
        content: 'Email';
      }
      &:nth-child(3)::before {
        content: 'Phone';
      }
      &:nth-child(2)::before, &:nth-child(3)::before {
        position: absolute;
        font-size: 0.6rem;
        font-weight: bold;
        color: rgb(18, 82, 10);
        transform: translateY(-0.7rem);
      }
    }
  }
  p { margin-top: 50px; text-align: center; }
</style>