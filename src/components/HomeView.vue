<template>
  <div>
    <h3>{{ $t('message.welcomeTo') }}</h3>
    <p>{{ $t('message.homeDescription') }}</p>
    <p>{{ $t('message.homePurpose') }}</p>
    <p>{{ $t('message.homeExplanation') }}</p>

    <h3>{{ $t('message.gettingStarted') }}</h3>
    <p>{{ $t('message.gettingStartedDescription') }}</p>
    <p>
      <strong>{{ $t('message.gettingStartedFreeTier') }}</strong>
    </p>
    <p>{{ $t('message.gettingStartedOrangeBar') }}</p>
    <p>{{ $t('message.gettingStartedMinimizeWaitTimes') }}</p>
    <p><strong>Username:</strong> guest@ath-portfolio.ca</p>
    <p><strong>Password:</strong> guestPublic</p>

    <div v-if="!isSigned" class="app-login">
      <h3 id="login">
        {{ $t('message.login') }}
      </h3>
      <form @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="text"
          autocomplete="email"
          :placeholder="$t('message.email')"
        />
        <input
          v-model="password"
          type="password"
          autocomplete="current-password"
          :placeholder="$t('message.password')"
        />
        <button type="submit" :disabled="!email || !password || isLoading">
          <span v-if="isLoading">{{ $t('message.loading') }}</span>
          <span v-else>{{ $t('message.submit') }}</span>
        </button>
        <span v-if="errorText" class="error-text">{{ errorText }}</span>
      </form>
    </div>
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { signIn, checkAuth } from '../utils/auth';
import { ROOT_PATH } from '../utils/constants';

const email = ref<string>('');
const errorText = ref<string>('');
const isLoading = ref<boolean>(false);
const isSigned = ref<boolean>(checkAuth());
const password = ref<string>('');

const router = useRouter();

const handleSubmit = async () => {
  if (!email.value || !password.value) {
    errorText.value = 'Please fill in both email and password';
    return;
  }

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email.value)) {
    errorText.value = 'Please enter a valid email address';
    return;
  }

  if (password.value.length < 8) {
    errorText.value = 'Please enter a password with at least 8 characters';
    return;
  }

  errorText.value = '';
  isLoading.value = true;

  try {
    const result = await signIn({ email, password });

    if (!result) {
      errorText.value = 'Invalid credentials';
      isLoading.value = false;
      return;
    }
    isSigned.value = true;
    errorText.value = '';
    router.push(`${ROOT_PATH}/dashboard`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    errorText.value = 'An error occurred while signing in';
    isLoading.value = false;
  }
};
</script>
