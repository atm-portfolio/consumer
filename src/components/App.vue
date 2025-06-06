<template>
  <div
    v-if="message"
    className="app-status"
    v-text="message"
  />
  
  <header
    class="app-header"
    :style="{ width: `${width}px` }"
  >
    <h3>{{ $t('message.hello') }}</h3>
    <i
      class="fa-solid fa-bars main-menu"
      @click="isMenuOpen = !isMenuOpen"
    />
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="loc in $i18n.availableLocales"
          :key="`locale-${loc}`"
          :value="loc"
        >
          {{ loc }}
        </option>
      </select>
    </div>
    <span
      v-if="!isSigned"
      onclick="window.location.href = '/#login'"
    >
      <i class="fa-solid fa-right-to-bracket auth-link" />
    </span>
    <RouterLink
      v-if="isSigned"
      :to="rootPath + '/logout'"
    >
      <i class="fa-solid fa-person-walking-dashed-line-arrow-right auth-link" />
    </RouterLink>
    <a
      href="https://ath-portfolio.ca"
      class="auth-link"
    >
      <i class="fa-solid fa-stairs" />
    </a>
  </header>
  <nav :class="{ 'app-nav': true, hidden: !isMenuOpen }">
    <RouterLink :to="rootPath">
      {{ $t('message.home') }}
    </RouterLink>
    <RouterLink
      v-if="isSigned"
      :to="rootPath + '/dashboard'"
    >
      {{ $t('message.dashboard') }}
    </RouterLink>
    <RouterLink :to="rootPath + '/about'">
      {{ $t('message.about') }}
    </RouterLink>
  </nav>
  <main class="app-content">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { checkAuth } from '../utils/auth';
import { ROOT_PATH, apiBaseUrl } from '../utils/constants';
import { api } from '../utils/service';

const width = ref<number>(globalThis.innerWidth);
const isSigned = ref<boolean>(checkAuth());
const isMenuOpen = ref<boolean>(width.value > 768);
const rootPath = ref<string>(ROOT_PATH);
const message = ref<string | null>('Please wait while we are waking the server...');

const router = useRouter();

const intervalId = ref<ReturnType<typeof globalThis.setInterval> | null>(null);
const abortControllerRef = ref(new globalThis.AbortController());
const abortControllerRefCurrent = abortControllerRef.value;

router.beforeEach(async () => {
  isSigned.value = checkAuth();
});

onMounted(() => {
  globalThis.addEventListener('resize', handleResize);

  const fetchData = async () => {
    try {
      await api.get(`${apiBaseUrl}/status`, {
        signal: abortControllerRefCurrent.signal,
      });
      message.value = null;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      message.value = 'Server returned an error... Please refresh this page.';
    }
  };

  fetchData();

  intervalId.value = globalThis.setInterval(() => fetchData(), 600000);
});

onBeforeUnmount(() => {
  globalThis.removeEventListener('resize', handleResize);

  if (intervalId.value !== null) {
    globalThis.clearInterval(intervalId.value);
  }
  if (abortControllerRefCurrent.signal.aborted) {
    abortControllerRefCurrent.abort();
  }
});

function handleResize(this: typeof globalThis): void {
  width.value = globalThis.innerWidth;
}
</script>
