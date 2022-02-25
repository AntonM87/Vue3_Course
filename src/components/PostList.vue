<template>
  <div>
    <h3>Список пользователей</h3>
    <PostItem
        class="post"
        v-for="post of posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove',post)"
    />
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props:{
    posts:{
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>
.post {
  padding: 1rem;
  border: 2px solid teal;
  margin-bottom: 1rem;
}
.post:hover {
  background: rgba(112, 232, 232, 0.55);
}
</style>