<template>
  <Transition name="fade">
    <div
      v-if="sideMenuState"
      class="foreground"
      @click="sideMenuState = false"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
const { useSideMenu } = useMenuStates();
const sideMenuState = useSideMenu();
</script>

<style scoped lang="scss">
.foreground {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba($black, 0.5);
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
