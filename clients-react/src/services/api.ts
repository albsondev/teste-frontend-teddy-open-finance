import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Agora usando o proxy definido
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para buscar clientes com paginação
export const getClients = async (page: number, limit: number) => {
    const response = await api.get('/users', { params: { page, limit } });
    return response.data;
  };

// Função para atualizar cliente
export const updateClient = async (id: number, data: { name?: string; salary?: string; companyValue?: string }) => {
  const response = await api.patch(`/users/${id}`, data);
  return response.data;
};

// Função para excluir cliente
export const deleteClient = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

export default api;
