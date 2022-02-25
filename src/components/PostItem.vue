<template>
  <div class="post">
    <div class="post-wrapper">
      <div>
        <strong>{{ post.title }}:</strong> {{ post.body }}
      </div>
      <MyButton class="post-btns" role="button" @click="$emit('remove', post)">
        Удалить
      </MyButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.post-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>