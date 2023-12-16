<template>
  <div class="header">
    <Icon
      name="humbleicons:bars"
      class="header__menu-icon"
      @click="sideMenuState = !sideMenuState"
    />
    <NuxtLink :to="localePath('/')" class="header__logo">NXTDES</NuxtLink>
    <img
      v-if="user?.photoURL"
      :src="user.photoURL"
      class="header__user-image"
      @click="accountMenuState = !accountMenuState"
    />
    <Icon
      v-else
      name="material-symbols:account-circle"
      class="header__user"
      @click="accountMenuState = !accountMenuState"
    />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { useOpenSideMenu, useAccountMenu } = useMenuStates();
const { user } = useFirebaseAuth();
const sideMenuState = useOpenSideMenu();
const accountMenuState = useAccountMenu();
</script>

<style scoped lang="scss">
.header {
  background-color: $nxtdes-blue;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  z-index: 5;
  border-bottom: solid 2px $zinc-extra-light;

  @include tablet {
    justify-content: flex-start;
  }

  &__menu-icon {
    font-size: 2rem;
    font-weight: bold;
    padding-inline: 20px;
    color: $zinc-extra-light;
    position: absolute;
    left: 0;

    @include tablet {
      display: none;
    }
  }

  &__logo {
    color: $zinc-extra-light;
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
    color: $zinc-extra-light;
  }

  &__user-image {
    position: absolute;
    right: 0;
    margin-inline: 20px;
    width: 32px;
    height: 32px;
    border: solid 2px $zinc-extra-light;
    border-radius: 50%;
  }
}
</style>
