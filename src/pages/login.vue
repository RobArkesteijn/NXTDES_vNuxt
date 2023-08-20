<template>
  <div class="login">
    <h1 class="login__title">NXTDES</h1>
    <h2 class="login__slogan">travelling, history, culture, city & nature</h2>
    <div class="login__form-container">
      <form class="login__form">
        <Transition name="name-fade">
          <span
            v-if="signIn === 'Login'"
            class="login__name login__input-wrapper"
          >
            <label for="Name" class="login__label">Name</label>
            <input
              id="Name"
              v-model="name"
              type="text"
              placeholder="Name"
              class="login__input"
            />
          </span>
        </Transition>
        <span class="login__email login__input-wrapper">
          <label for="Email" class="login__label">Email</label>
          <input
            id="Email"
            v-model="email"
            type="email"
            placeholder="Email"
            class="login__input"
          />
        </span>
        <span class="login__password login__input-wrapper">
          <label for="Password" class="login__label">Password</label>
          <input
            id="Password"
            v-model="password"
            type="password"
            placeholder="Password"
            class="login__input"
          />
        </span>
        <Transition name="error-fade">
          <p v-if="errMsg" class="login__error">{{ errMsg }}</p>
        </Transition>
        <span class="login__login-button-wrapper">
          <button
            type="submit"
            class="login__login-button"
            @click="registerOrLogin"
          >
            {{ signInType }}
          </button>
        </span>
      </form>
      <button class="login__google-button" @click="signInWithGoogle">
        <Icon
          name="basil:google-alt-outline"
          class="login__google-button-icon"
        />
        <p class="login__google-button-text">Sign In With Google</p>
      </button>
    </div>
    <span class="login__sign-in-referral">
      <p class="login__referral-text">{{ signInReferralText }}</p>
      <p class="login__referral-type" @click="changeSignInState">
        {{ signIn }}
      </p>
    </span>
    <button class="login__guest-button">
      <h2 class="login__guest-text" @click="redirectForGuest">
        Enter As Guest
      </h2>
    </button>
  </div>
</template>

<script setup lang="ts">
const { registerUser, loginUser, signInWithGoogle, redirectForGuest } =
  useFirebaseAuth();
const {
  useNameState,
  useEmailState,
  usePasswordState,
  useErrMsgState,
  useSignInState,
} = useLoginStates();
const name = useNameState();
const email = useEmailState();
const password = usePasswordState();
const errMsg = useErrMsgState();
const signIn = useSignInState();

const signInReferralText = computed(() => {
  return signIn.value === 'Login'
    ? 'Already have an account?'
    : "Don't have an account yet?";
});

const signInType = computed(() => {
  return signIn.value === 'Login' ? 'Register' : 'Login';
});

const changeSignInState = () => {
  // Refactor to clearNuxtState()
  errMsg.value = '';
  name.value = '';
  email.value = '';
  password.value = '';
  signIn.value = signIn.value === 'Login' ? 'Register' : 'Login';
};

const registerOrLogin = (event: MouseEvent) => {
  if (signInType.value === 'Login') {
    loginUser(event);
  } else {
    registerUser(event);
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: $nxtdes-blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $zinc-extra-light;

  &__title {
    font-size: 36px;
  }

  &__slogan {
    margin-bottom: 0.5rem;
  }

  &__form-container {
    background-color: $zinc-light;
    width: calc(100% - 80px);
    border-radius: 5px;
    padding-block: 1rem;
  }

  &__form,
  &__form-container,
  &__input-wrapper,
  &__login-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__input-wrapper {
    margin-block: 16px;
  }

  &__label {
    color: $black;
  }

  &__input {
    border: none;
    padding: 0.25rem;
    margin-block: 0.25rem;
  }

  &__error {
    color: red;
    margin-bottom: 1.5rem;
  }

  &__login-button-wrapper {
    padding-bottom: 1rem;
  }

  &__login-button {
    width: 145px;
    padding-block: 0.25rem;
    color: $zinc-extra-light;
    background-color: $nxtdes-blue;
    border: none;
    font-size: 16px;
    border-radius: 5px;
  }

  &__google-button {
    display: flex;
    align-items: center;
    background-color: $nxtdes-blue;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: $zinc-extra-light;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: bold;
  }

  &__google-button-icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }

  &__sign-in-referral {
    display: flex;
    font-weight: bold;
    margin-block: 0.5rem;
  }

  &__referral-text {
    margin-right: 0.5rem;
  }

  &__referral-type {
    text-decoration: underline;
    cursor: pointer;
  }

  &__guest-button {
    padding: 0.25rem 1rem;
    margin-block: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
  }
}

.name-fade-enter-active,
.name-fade-leave-active,
.error-fade-enter-active,
.error-fade-leave-active {
  transition:
    opacity 0.3s ease,
    height 0.3s ease,
    margin 0.3s ease;
}

.name-fade-enter-from,
.name-fade-leave-to {
  opacity: 0;
  height: 0;
  margin-block: 0;
}

.name-fade-enter-to,
.name-fade-leave-from {
  height: 50px;
}

.error-fade-enter-from,
.error-fade-leave-to {
  opacity: 0;
  height: 0;
  margin-bottom: 0;
}

.error-fade-enter-to,
.error-fade-leave-from {
  height: 19px;
}
</style>
