<template>
  <div class="post">
    <div class="post-wrapper">
      <div>
        <strong>{{ post.title }}:</strong> {{ post.body }}
      </div>
      <div class="btns-wrapper">
        <MyButton class="post-btns" role="button" @click="$router.push(`/posts/${post.id}`)">Подробнее</MyButton>
        <MyButton class="post-btns" role="button" @click="$emit('remove', post)">Удалить</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "PostItem",
  components: {MyButton},
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
.post-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .buttons-wrapper {
    display: flex;
    justify-content: end;
    .post-btns {
      border: 1px solid teal;
      cursor: pointer;
      padding: 0.75rem 0.5rem;
      margin-right: 1rem;
      &:active {
        background: teal;
        color: white;
      }
    }
  }
}
</style>