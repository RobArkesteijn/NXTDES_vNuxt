<template>
  <div>
    <TheHeader />
    <TheSidemenu
      :travel-info="sidemenu.travelInfo"
      :countries="sidemenu.countries"
      :upcoming-destinations="sidemenu.upcDestinations"
    />
    <TheAccountmenu />
    <TheForeground />
    <TheBanner :banner-image="banner.image" :banner-intro="banner.title" />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const props = useAttrs();

interface bannerType {
  image: Object;
  title: string;
}

interface sidemenuType {
  travelInfo: {
    title: string;
    slug: string;
  };
  countries: {
    title: string;
    slug: string;
    cities: {
      title: string;
      slug: string;
    }[];
  };
  upcomingDestinations: {
    title: string;
    slug: string;
  };
}

const banner: ComputedRef<bannerType> = computed(() => {
  return props.banner;
});

const sidemenu: ComputedRef<sidemenuType> = computed(() => {
  return props.sidemenu;
});
</script>
