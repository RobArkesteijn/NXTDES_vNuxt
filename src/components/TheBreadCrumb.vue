<template>
  <div class="breadcrumb">
    <span
      v-for="(param, index) in paramValues"
      :key="`${index}-param`"
      class="breadcrumb__wrapper"
    >
      <h2 class="breadcrumb__param">{{ param }}</h2>
      <Icon
        v-if="index !== paramValues.length - 1"
        name="ic:baseline-keyboard-arrow-right"
        class="breadcrumb__arrow"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
const { $router } = useNuxtApp();
const { t } = useI18n();

const paramValues: string[] = computed(() => {
  if (Object.values($router.currentRoute.value.params).length) {
    return Object.values($router.currentRoute.value.params);
  } else {
    return [t('homepage')];
  }
});
</script>

<style scoped lang="scss">
.breadcrumb {
  display: flex;
  align-items: center;
  background-color: rgba($nxtdes-blue-extra-dark, 0.9);
  border-top: solid 2px $zinc-light;
  border-bottom: solid 2px $zinc-light;

  &__wrapper {
    font-weight: bold;
    font-size: 24px;
    text-shadow: 2px 2px 0px $nxtdes-blue;
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }

  &__arrow {
    padding-inline: 8px;
    position: relative;
    bottom: -3px;
  }
}
</style>
