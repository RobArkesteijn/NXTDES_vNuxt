<template>
  <Transition name="slide-fade">
    <div v-if="accountMenuState" ref="accountMenu" class="the-accountmenu">
      <Icon name="mi:log-out" class="the-accountmenu__icon" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { useAccountMenu } = useMenuStates();
const accountMenuState = useAccountMenu();
</script>

<style scoped lang="scss">
.the-accountmenu {
  position: fixed;
  right: 0;
  top: 75px;
  height: 40px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $nxtdes-blue;
  border: solid 3px $ghost-white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  &__icon {
    color: $ghost-white;
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
