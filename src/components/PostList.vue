<template>
  <div>
    <h3>Список пользователей</h3>
    <transition-group name="post-list">
      <PostItem
          class="post"
          v-for="post of posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove',post)"
      />
    </transition-group>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: {
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
h1{
  margin-bottom: 1rem;
}
.post:hover {
  background: rgba(112, 232, 232, 0.55);
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.2s ease;
}
</style>