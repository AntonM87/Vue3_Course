<template>
  <div class="nav-bar">
    <div @click="$router.push('/')"> VUE3</div>
    <div class="buttons-wrapper">
      <my-button style="margin-left: 10px" @click="$router.push('/posts')">Записи</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/about')">О сайте</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/store')">Store</my-button>
      <my-button style="margin-left: 10px" @click="$router.push('/composition')">CompositionAPI</my-button>

      <!--      <router-link to="/posts">Записи</router-link>-->
      <!--      <router-link  to="/about">О сайте</router-link>-->
    </div>
  </div>
</template>

<script>
// import MyButton from "@/components/UI/MyButton";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "NavBar",
  components: {MyButton},
  // components: {MyButton}
}
</script>

<style lang="scss">
.nav-bar {
  height: 60px;
  width: 100vw;
  background: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    cursor: pointer;
    margin-left: 3rem;
  }

  .buttons-wrapper {
    margin-right: 3rem;

    my-button {
      border: 1px solid teal;
      cursor: pointer;
      padding: 0.75rem 0.5rem;
      margin-right: 1rem;
    }
  }
}
</style>