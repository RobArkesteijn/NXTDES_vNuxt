<template>
  <Transition name="slide">
    <div v-if="sideMenuState" class="the-sidemenu"></div>
  </Transition>
</template>

<script setup lang="ts">
const { useSideMenu } = useMenuStates();
const sideMenuState = useSideMenu();
</script>

<style scoped lang="scss">
.the-sidemenu {
  height: 100vh;
  width: 66.6%;
  background-color: $nxtdes-blue;
  position: fixed;
  top: 0;
  z-index: 99;
}

.slide-enter-active,
.slide-leave-active {
  transition: left 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  left: -66.6%;
}

.slide-enter-to,
.slide-leave-from {
  left: 0;
}
</style>
