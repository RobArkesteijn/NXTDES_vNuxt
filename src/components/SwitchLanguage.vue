<template>
  <div class="language">
    <NuxtLink :to="switchLocalePath('nl')">
      <DutchFlag
        class="language__dutch language__icon"
        :class="{ language__inactive: $i18n.locale !== 'nl' }"
      />
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('en')">
      <EnglishFlag
        class="language__english language__icon"
        :class="{ language__inactive: $i18n.locale !== 'en' }"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped lang="scss">
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__icon {
    height: 40px;
    width: auto;
    padding-inline: 10px;
    transition: filter 0.3s ease;
  }

  &__inactive {
    position: relative;
    filter: brightness(50%) grayscale(100%);
  }
}
</style>
