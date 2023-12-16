<template>
  <div class="options">
    <div class="options__options-box" @click="showOptions = !showOptions">
      <span class="options__option">
        <Icon :name="iconName" class="options__option-icon" />
        <h2 class="options__option-title">{{ title }}</h2>
      </span>
      <Icon
        name="ic:baseline-keyboard-arrow-right"
        class="options__arrow"
        :class="{ 'options__arrow--active': showOptions }"
      />
    </div>
    <Transition name="list-fade">
      <div v-if="showOptions" class="options__list-wrapper">
        <ul class="options__list">
          <NuxtLink
            v-for="(option, index) in options"
            :key="`${option}-${index}`"
            class="options__item-link"
            :to="localePath(`${option.slug}`)"
            @click="sideMenuState = false"
          >
            <li class="options__item">
              <h3 class="options__sub-option">- {{ option.title }}</h3>
            </li>
          </NuxtLink>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String as PropType<String>,
    default: '',
  },
  options: {
    type: Array as PropType<any[]>,
    required: true,
  },
  iconName: {
    type: String as PropType<string>,
    default: '',
  },
});

const localePath = useLocalePath();
const { useOpenSideMenu } = useMenuStates();
const sideMenuState = useOpenSideMenu();
const showOptions = ref(false);
</script>

<style scoped lang="scss">
.options {
  padding: 30px 10px 0px 20px;
  display: flex;
  flex-direction: column;
  &__options-box {
    display: flex;
    align-items: center;
    color: $white;
    padding-bottom: 10px;
  }

  &__option {
    display: flex;
    align-items: center;
  }

  &__option-title {
    font-size: 24px;
  }

  &__option-icon {
    font-size: 24px;
    margin-right: 10px;
  }

  &__arrow {
    margin-left: auto;
    font-size: 24px;
    transition: transform 0.3s ease;

    &--active {
      transform: rotate(90deg);
    }
  }

  &__list-wrapper {
    display: grid;
    grid-template-rows: 1fr;
  }

  &__list {
    list-style: none;
    overflow: hidden;
  }

  &__item-link {
    text-decoration: none;
    color: $white;
  }

  &__item {
    font-size: 20px;
    padding-left: 10px;
    padding-block: 10px;
  }
}

.list-fade-enter-active,
.list-fade-leave-active {
  transition:
    grid-template-rows 0.5s ease,
    opacity 0.5s ease;
}

.list-fade-enter-from,
.list-fade-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}
</style>
