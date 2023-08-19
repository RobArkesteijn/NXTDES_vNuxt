<template>
  <div class="the-header">
    <Icon
      name="humbleicons:bars"
      class="the-header__menu-icon"
      @click="sideMenuState = !sideMenuState"
    />
    <NuxtLink to="/" class="the-header__logo">NXTDES</NuxtLink>
    <Icon
      name="material-symbols:account-circle"
      class="the-header__user"
      @click="accountMenuState = !accountMenuState"
    />
  </div>
</template>

<script setup lang="ts">
const { useSideMenu, useAccountMenu } = useMenuStates();
const sideMenuState = useSideMenu();
const accountMenuState = useAccountMenu();
</script>

<style scoped lang="scss">
.the-header {
  background-color: $nxtdes-blue;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  z-index: 5;

  @include tablet {
    justify-content: flex-start;
  }

  &__menu-icon {
    font-size: 2rem;
    font-weight: bold;
    padding-inline: 20px;
    color: $ghost-white;
    position: absolute;
    left: 0;

    @include tablet {
      display: none;
    }
  }

  &__logo {
    color: $ghost-white;
    font-size: 36px;
    text-shadow: 2px 2px 0.2px $nxtdes-blue-dark;
    font-family: 'Fredericka the Great', cursive;
    text-decoration: none;
    padding-inline: 40px;
  }

  &__user {
    position: absolute;
    right: 0;
    padding-inline: 20px;
    font-size: 2rem;
    color: $ghost-white;
  }
}
</style>
