<template>
  <Transition name="fade-banner">
    <div class="banner">
      <img v-if="bannerImage" :src="bannerImage" class="banner__image" />
      <Transition name="fade-text">
        <span class="banner__title">
          <h2 class="banner__country-name">{{ countryName }}</h2>
        </span>
      </Transition>
      <Transition name="fade-text">
        <span class="banner__intro">
          <h2 class="banner__country-intro">{{ bannerIntro }}</h2>
        </span>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { $router } = useNuxtApp();
const { fetchBannerImage, fetchBannerTitle, bannerImage, bannerIntro } =
  useBanner();
const params = $router.currentRoute.value.params;
const paramKeys = Object.keys(params);
const lastParamKey = paramKeys[paramKeys.length - 1];
const lastParamValue = params[lastParamKey];

const countryName = computed(() => {
  return lastParamValue.charAt(0).toUpperCase() + lastParamValue.slice(1);
});

const destinationType = computed(() => {
  return paramKeys.length > 1 ? 'city' : 'country';
});

onBeforeMount(() => {
  fetchBannerImage(lastParamValue);
  fetchBannerTitle(lastParamValue, destinationType.value);
});
</script>

<style scoped lang="scss">
.banner {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__title {
    margin-top: 75px;
    padding: 20px;
    color: $white;
  }

  &__country-name {
    font-weight: bold;
    font-size: 36px;
    text-shadow: 2px 2px 0px $nxtdes-blue-dark;
  }

  &__intro {
    margin-top: auto;
    color: $white;
    min-height: 20%;
    padding: 20px;
    display: flex;
    align-items: flex-end;
  }

  &__country-intro {
    text-shadow: 2px 2px 0px $nxtdes-blue-dark;
    font-size: 48px;
    font-weight: bold;
  }
}

.fade-banner-enter-active,
.fade-banner-leave-active {
  transition: opacity 1s ease;
}

.fade-banner-enter-from,
.fade-banner-leave-to {
  opacity: 0;
}
</style>
