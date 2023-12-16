<template>
  <Transition name="slide">
    <div v-if="sideMenuState" class="sidemenu">
      <h2 v-if="user?.displayName" class="sidemenu__welcome">
        {{ $t('welcome') }} {{ firstName }}
      </h2>
      <h2 v-else class="sidemenu__welcome">
        {{ $t('welcome') }} {{ $t('guest') }}
      </h2>
      <SwitchLanguage />
      <SideMenuOption
        :title="$t('travelinfo')"
        :options="travelInfo"
        icon-name="tabler:info-circle-filled"
      />
      <SideMenuOption
        :title="$t('countries')"
        :options="countries"
        icon-name="ion:earth"
      />
      <SideMenuOption
        :title="$t('upcomingDestionations')"
        :options="upcomingDestinations"
        icon-name="ph:airplane-takeoff-fill"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { useOpenSideMenu } = useMenuStates();
const { user } = useFirebaseAuth();
const sideMenuState = useOpenSideMenu();

defineProps({
  travelInfo: {
    type: Array<String>,
    required: true,
  },
  countries: {
    type: Array<String>,
    required: true,
  },
  upcomingDestinations: {
    type: Array<String>,
    required: true,
  },
});

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
  overflow: scroll;

  &__welcome {
    color: $zinc-extra-light;
    min-height: 75px;
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
