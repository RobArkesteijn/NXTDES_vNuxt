<template>
  <div class="banner">
    <NuxtImg
      v-if="bannerImage"
      ref="bannerImageRef"
      provider="strapi"
      :src="bannerImage.url"
      class="banner__image"
      @click="scrollToElement('page-text-content')"
    />
    <span class="banner__breadcrumb">
      <TheBreadCrumb />
    </span>
    <span
      ref="introText"
      class="banner__intro"
      @click="scrollToElement('page-text-content')"
    >
      <h2 class="banner__country-intro">
        {{ bannerIntro || $t('introText') }}
      </h2>
      <Icon name="gg:corner-right-down" class="banner__redirect" />
    </span>
  </div>
</template>

<script setup lang="ts">
const { $router } = useNuxtApp();
const { fadeInTextFromBottom, fadeInImage } = useAnimations();

defineProps({
  bannerImage: {
    type: Object,
    required: true,
  },
  bannerIntro: {
    type: String,
    required: true,
  },
});

const introText = ref<HTMLElement>();
const bannerImageRef = ref<HTMLElement>();

watch(
  () => $router.currentRoute.value,
  () => {
    if (introText.value) {
      fadeInTextFromBottom(introText.value);
    }
    if (bannerImageRef.value) {
      fadeInImage(bannerImageRef.value);
    }
  },
);

function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped lang="scss">
.banner {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__breadcrumb {
    margin-top: 75px;
    color: $white;
  }

  &__intro {
    margin-top: auto;
    color: $white;
    padding: 20px;
    display: flex;
    align-items: flex-end;
    background-color: rgba($nxtdes-blue-extra-dark, 0.9);
    border-top: solid 2px $zinc-light;
  }

  &__country-intro {
    text-shadow: 2px 2px 0px $nxtdes-blue;
    font-size: 48px;
    font-weight: bold;
    max-width: 90%;
  }

  &__redirect {
    height: 4em;
    width: auto;
  }
}
</style>
