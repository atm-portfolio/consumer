<template>
  <h1>{{ $t('message.logout') }}</h1>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

import { signOut } from '../utils/auth';

onMounted(() => {
  signOut();
});
</script>
