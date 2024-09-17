<template>
  <div id="app" class="d-flex flex-column align-items-center justify-content-center vh-100">
    <div class="card p-4 shadow-sm">
      <h1 class="mb-3">Olá, seja bem-vindo!</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="Digite o seu nome"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-lg w-100">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Cookies from 'js-cookie';

export default defineComponent({
  name: 'App',
  setup() {
    const username = ref('');

    const handleLogin = () => {
      // Armazenar o nome do usuário em um cookie
      Cookies.set('username', username.value, { path: '/', sameSite: 'Lax' });
      // Redirecionar para a página de clientes em React
      window.location.href = 'http://localhost:3001';  // Ajuste conforme a URL do React
    };

    return {
      username,
      handleLogin
    };
  }
});
</script>

<style scoped>
#app {
  max-width: 400px;
  margin: 0 auto;
}

.card {
  border-radius: 12px;
  padding: 20px;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
}

button {
  background-color: #f06c1a;
  border-color: #f06c1a;
}

button:hover {
  background-color: #e05e00;
}

</style>
