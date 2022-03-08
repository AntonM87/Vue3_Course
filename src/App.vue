<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from "@/components/UI/NavBar";
export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>

