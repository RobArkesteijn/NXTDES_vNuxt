<template>
  <Transition name="slide-fade">
    <div
      v-if="accountMenuState"
      ref="accountMenu"
      class="accountmenu"
      @click="handleSignout"
    >
      <Icon name="mi:log-out" class="accountmenu__icon" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { useAccountMenu } = useMenuStates();
const { handleSignout } = useFirebaseAuth();
const accountMenuState = useAccountMenu();
</script>

<style scoped lang="scss">
.accountmenu {
  position: fixed;
  right: 0;
  top: 75px;
  height: 40px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $nxtdes-blue;
  border: solid 3px $zinc-extra-light;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &__icon {
    color: $zinc-extra-light;
    font-size: 20px;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: top 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  top: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  top: 75px;
}
</style>
