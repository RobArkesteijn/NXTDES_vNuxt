<template>
  <div>
    <div v-if="$route.path !== '/login'">
      <TheHeader />
      <TheSidemenu />
      <TheAccountmenu />
      <TheForeground />
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { checkUserStatus } = useFirebaseAuth();
onBeforeMount(() => {
  checkUserStatus();
});
</script>
