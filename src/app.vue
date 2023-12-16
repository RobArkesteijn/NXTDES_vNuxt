<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// const { $router } = useNuxtApp();
// const { checkUserStatus } = useFirebaseAuth();
// const { fetchBannerImage, fetchPageContent } = usePageContent();

// const params = computed(() => {
//   return $router.currentRoute.value.params;
// });

// const paramKeys = computed(() => {
//   return Object.keys(params.value);
// });

// const lastParamKeys = computed(() => {
//   return paramKeys.value[paramKeys.value.length - 1];
// });

// const lastParamValue = computed(() => {
//   return params.value[lastParamKeys.value] as string;
// });

// const destinationType = computed(() => {
//   return paramKeys.value.length > 1 ? 'city' : 'country';
// });

// watch(
//   () => lastParamValue.value,
//   (newValue) => {
//     fetchBannerImage(newValue);
//     fetchPageContent(newValue, destinationType.value);
//   },
// );

// onBeforeMount(() => {
//   checkUserStatus();
// });

// onMounted(() => {
//   fetchBannerImage(lastParamValue.value);
//   fetchPageContent(lastParamValue.value, destinationType.value);
// });
</script>
