<template>
  <header
    className="app-header"
    :style="{ width: `${width}px` }"
  >
    <h3>{{ $t('message.hello') }}</h3>
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
    <RouterLink to="/logout">
      <i className="fa-solid fa-right-to-bracket auth-link" />
    </RouterLink>

    <a
      href="/#/portfolio"
      className="auth-link"
    >
      <i className="fa-solid fa-stairs" />
    </a>
  </header>
  <nav className="app-nav">
    <RouterLink to="/">
      {{ $t('message.home') }}
    </RouterLink>
    <RouterLink to="/dashboard">
      {{ $t('message.dashboard') }}
    </RouterLink>
    <RouterLink to="/about">
      {{ $t('message.about') }}
    </RouterLink>
  </nav>
  <main className="app-content">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, } from 'vue';

const width = ref<number>(globalThis.innerWidth);

onMounted(() => {
  globalThis.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  globalThis.removeEventListener('resize', handleResize);
});

function handleResize(this: typeof globalThis): void {
  width.value = globalThis.innerWidth;
}
</script>
