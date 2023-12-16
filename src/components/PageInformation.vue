<template>
  <div id="page-text-content" class="page-information">
    <p class="page-information__text">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.page-information {
  padding: 40px 20px;

  &__text {
    font-size: 20px;
    line-height: 2rem;
  }
}
</style>
