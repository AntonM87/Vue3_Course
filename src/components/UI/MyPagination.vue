<template>
  <div class="page-wrapper">
    <div
        @click="this.$emit('update:page',pageNumber)"
        class="page"
        :class="{'current-page':  page === pageNumber}"
        :key="pageNumber"
        v-for="pageNumber in totalPages">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  props: {
    totalPages: {
      required: true,
    },
    page: {
      required: true,
      type: Number,
    }
  },
}
</script>

<style scoped lang="scss">
.page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.page {
  margin: 0.15rem 0.25rem;
  padding: 0.15rem 0.25rem;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #e7e7e7;
  }
}

.current-page {
  border: 2px solid teal;

}
</style>