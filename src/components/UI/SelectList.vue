<template>
  <div class="select-list">
    <div>{{title}}</div>
    <select @change="changeOption">
      <option disabled>Выберите из списка</option>
      <option
          v-for="option of options"
          :key="option.id"
          :value="option.value"
      >{{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectList",
  props: {
    title:{
      type:String,
      required: true,
    },
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  },
}
</script>

<style scoped lang="scss">
.select-list {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: stretch;
  div{
    margin-right: 1rem;
  }
}
</style>