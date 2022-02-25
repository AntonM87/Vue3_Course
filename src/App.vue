<template>
  <div class="app">
    <h1>Страница с записями</h1>
    <MyButton @click="showDialog">Создать запись</MyButton>
    <DialogWindow v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </DialogWindow>
    <PostList @remove="removePost" :posts="posts" v-if="posts.length > 0"/>
    <h2 style="color: red" v-else>Добавте новых пользователей</h2>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import DialogWindow from "@/components/UI/DialogWindow";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

export default {
  components: {MyButton, DialogWindow, PostList, PostForm},
  data() {
    return {
      posts: [],
      title: '',
      body: '',
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => post.id !== p.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка')
      }
    },
  },
  mounted(){
    this.fetchPosts();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 2rem;
}
</style>