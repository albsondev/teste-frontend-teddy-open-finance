<template>
  <div>
    <h1>Digite o nome do cliente</h1>
    <input v-model="clientName" placeholder="Nome do cliente" />
    <button @click="submitName">Enviar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const clientName = ref('');
const router = useRouter();

const submitName = () => {
  if (clientName.value) {
    router.push(`/clients?name=${clientName.value}`);
  }
};
</script>