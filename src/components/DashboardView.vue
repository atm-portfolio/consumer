<template>
  <div class="dashboard-header">
    <h1>{{ $t('message.dashboard') }}</h1>
    <button
      :disabled="isLoading"
      @click="submitSelection()"
    >
      <span v-if="isLoading">{{ $t('message.loading') }}</span>
      <span v-else>{{ $t('message.submit') }}</span>
    </button>
  </div>
  <div class="dashboard-content">
    <div
      v-for="project in dataSource"
      :key="project._id"
      class="project"
    >
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <div
        v-for="product in project.products"
        :key="`${project._id}-${product._id}`"
      >
        <input
          :id="`checkbox-${project._id}-${product._id}`"
          v-model="selectedProducts"
          type="checkbox"
          :value="`${project._id}-${product._id}`"
          :disabled="isLoading"
        >
        <label :for="`checkbox-${project._id}-${product._id}`">{{
          product.name
        }}</label>
      </div>
    </div>
  </div>
  <br>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { apiBaseUrl } from '../utils/constants';
import { apiWithToken } from '../utils/service';
import { getData } from '../utils/collection';
import jwtDecoder from '../utils/decoders';
import Storage from '../utils/storage';
import { delay } from '../utils/timers';
import { ProjectDataSourceType } from '../types/grid';

const dataSource = ref<ProjectDataSourceType[]>([]);
const isLoading = ref<boolean>(true);

onMounted(async () => {
  const data = await getData();
  isLoading.value = false;
  dataSource.value = data;
});

const selectedProducts = ref<string[]>([]);

const submitSelection = async () => {
  const token = Storage.get('token');
  if (!token) {
    return;
  }

  const jwt = jwtDecoder(token);
  const { userId } = JSON.parse(jwt);

  const groupedProducts = selectedProducts.value.reduce(
    (acc, curr) => {
      const [projectId, productId] = curr.split('-');
      if (!acc[projectId]) {
        acc[projectId] = [];
      }
      acc[projectId].push(productId);
      return acc;
    },
    {} as Record<string, string[]>
  );

  let count = 0;

  isLoading.value = true;
  const promises = Object.entries(groupedProducts).map(
    ([projectId, products]) => {
      return delay(count++ * 500).then(() => {
        return apiWithToken()
          .post(`${apiBaseUrl}/reports`, {
            user: userId,
            project: projectId,
            products,
          })
          .then(() => {
            selectedProducts.value = [];
          })
          .catch((error) => {
            globalThis.console.error('Error:', error);
          });
      });
    }
  );
  Promise.all(promises).finally(() => {
    isLoading.value = false;
  });
};
</script>
