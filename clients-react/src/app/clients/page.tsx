'use client'

import { useState, useEffect } from 'react';
import ClientCard from '@/app/components/ClientCard';
import { getClients } from '@/services/api'; // Importando a função da API
import { Client } from '@/app/interfaces/client';
import Pagination from '../components/Pagination';
import TotalClients from '../components/TotalClients';


export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [totalClients, setTotalClients] = useState(0); // Estado para o total de clientes
  const [page, setPage] = useState(1);
  const [limit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchClients() {
      try {
        const { clients, totalPages } = await getClients(page, limit);
        setClients(clients);
        setTotalPages(totalPages);
        setTotalClients(clients.length);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    }

    fetchClients();
  }, [page, limit]);

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <TotalClients totalClients={totalClients} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {clients.map(client => (
          <ClientCard
            id={client.id}
            key={client.id}
            name={client.name}
            salary={client.salary}
            companyValue={client.companyValue}
            onSelect={() => console.log('Selecionar', client.id)}
            onEdit={() => console.log('Editar', client.id)}
            onDelete={() => console.log('Deletar', client.id)}
          />
        ))}
      </div>

      {/* Componente de paginação */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />

      <button className="mt-8 py-2 px-4 bg-orange-500 text-white rounded-lg">Criar Cliente</button>
    </div>
  );
}
