<template>
  <button class="btn" type="submit"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
}
</script>

<style scoped>
.btn {
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  padding: 1rem 1.2rem;
  background: none;
  color: teal;
  border: 1px solid teal;
  font-size: 1rem;
}
.btn:active {
  background: teal;
  color: white;
}
</style>