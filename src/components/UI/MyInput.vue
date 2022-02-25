<template>
  <input :value="modelValue" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
}
</style>