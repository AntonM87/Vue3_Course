<template>
  <form class="form" action="#" @submit.prevent>
    <h2>Создание поста</h2>
    <MyInput
        v-model="post.title"
        type="text"
        :name="Название"/>
    <MyInput
        v-model="post.body"
        type="text"
        :name="Описание"/>
    <MyButton
        @click="createPost"
        class="btn"
        type="submit">
      Создать
    </MyButton>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
import MyInput from "@/components/UI/MyInput";

export default {
  name: "PostForm",
  components: {MyInput, MyButton},
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      if (this.post.title === '' && this.post.body === '') return
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
  watch: {
    post: {
      handler(val) {
        console.log(val)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>