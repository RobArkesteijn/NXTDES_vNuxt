<template>
  <Transition name="slide">
    <div v-if="sideMenuState" class="sidemenu">
      <h2 v-if="user?.displayName" class="sidemenu__welcome">
        Welcome {{ firstName }}
      </h2>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { useSideMenu } = useMenuStates();
const { user } = useFirebaseAuth();
const sideMenuState = useSideMenu();

const firstName = computed(() => {
  return user.value?.displayName?.split(' ')[0];
});
</script>

<style scoped lang="scss">
.sidemenu {
  height: 100vh;
  width: 66.6%;
  background-color: $nxtdes-blue;
  position: fixed;
  top: 0;
  z-index: 99;

  &__welcome {
    color: $zinc-extra-light;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
  }
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
