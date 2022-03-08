<template>
  <div v-if="!isPostLoadingIndicator">
    <div><strong>Пост ID: </strong>{{ post.id }}</div>
    <div><strong>ID записи: </strong>{{post.id}}</div>
    <div><strong>Заголовок: </strong>{{post.title}}</div>
    <div><strong>Текст: </strong>{{post.body}}</div>
  </div>
  <LoadingIndicator v-else/>
</template>

<script>
import axios from "axios";
import LoadingIndicator from "@/components/UI/LoadingIndicator";
export default {
  name: "PostIdPage",
  components: {LoadingIndicator},

  data() {
    return {
      isPostLoadingIndicator: false,
      post: '',
      postId: this.$route.params.id,
    }
  },
  methods: {
    async fetchPost(id) {
      try {
        this.isPostLoadingIndicator = true;
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.post = response.data;
      } catch (e) {
        alert('Ошибка')
      } finally {
        this.isPostLoadingIndicator = false;
      }
    },
  },
  mounted() {
    this.fetchPost(this.postId);
  }
}
</script>

<style scoped>

</style>