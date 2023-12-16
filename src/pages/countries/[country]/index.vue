<template>
  <NuxtLayout name="default" :banner="banner" :sidemenu="sidemenuData">
    <PageInformation :description="description" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Strapi4ResponseMany } from '@nuxtjs/strapi/dist/runtime/types';
const route = useRoute();
const { fullPath } = route;

const { data } = await useAsyncData(fullPath, async () => {
  const { find } = useStrapi();
  try {
    const contentData = await find('Countries', {
      populate: '*',
    });
    const sidemenuData = await find('Sidemenu', {
      populate: '*',
    });
    return {
      content: contentData,
      sidemenu: sidemenuData,
    };
  } catch (e) {
    return showError('Unknown error');
  }
});

function isContentData(
  data: any,
): data is { content: Strapi4ResponseMany<unknown> } {
  return data && 'content' in data;
}

const content = computed(() => {
  if (isContentData(data.value)) {
    return data.value.content.data;
  }
});

const sidemenu = computed(() => {
  if (isContentData(data.value)) {
    return data.value.sidemenu.data;
  }
});

const description = computed(() => {
  const countryName = fullPath.split('/').pop();
  if (Array.isArray(content.value)) {
    const countryData: any = content.value?.find(
      (item: any) => item.attributes.country.toLowerCase() === countryName,
    );

    return countryData?.attributes?.description;
  }
});

const countryName = fullPath.split('/').pop();
const bannerImage = computed(() => {
  const countryData: any = content.value?.find(
    (item: any) => item.attributes.country.toLowerCase() === countryName,
  );
  return countryData?.attributes?.hero_image?.data.attributes;
});

const bannerIntro = computed(() => {
  const countryData: any = content.value?.find((item: any) => {
    return item.attributes.country.toLowerCase() === countryName;
  });
  return countryData?.attributes?.title;
});

const banner = {
  title: bannerIntro.value,
  image: bannerImage.value,
};

const countries = computed(() => {
  return sidemenu.value?.attributes?.countries;
});

const travelInfo = computed(() => {
  return sidemenu.value?.attributes?.travel_info;
});

const upcDestinations = computed(() => {
  return sidemenu.value?.attributes?.upc_destination;
});

const sidemenuData = {
  countries: countries.value,
  travelInfo: travelInfo.value,
  upcDestinations: upcDestinations.value,
};
</script>
