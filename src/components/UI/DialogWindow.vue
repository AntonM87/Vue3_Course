<template>
  <div class="dialog" v-if="show"  @click="hideDialog">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "DialogWindow",
  mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}
.dialog-content{
  margin: auto;
  padding: 1rem;
  background: white;
  border-radius: 0.25rem;
  min-height: 10vh;
  min-width: 35vw;
}
</style>