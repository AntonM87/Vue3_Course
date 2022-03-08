<template>
  <div>
    <h1>Добро пожаловать!</h1>
  </div>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/UI/NavBar";
export default {
  name: "MainPage",
  components: {NavBar}
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>