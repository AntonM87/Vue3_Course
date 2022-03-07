<template>
  <div class="input-wrapper">
    <input :value="modelValue" @input="updateInput" class="input">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    name:{
      type:String,
      required: false,
    },
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
.input-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  .input {
    width: 100%;
    background: rgba(244, 255, 255, 0.55);
    border: 1px solid teal;
    padding: 1rem 1.2rem;
  }
  div.select-list{
    background: rebeccapurple!important;
  }
}

</style>