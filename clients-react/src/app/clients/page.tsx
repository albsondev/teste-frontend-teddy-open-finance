'use client'

import { useState, useEffect } from 'react';
import ClientCard from '@/app/components/ClientCard';
import { getClients } from '@/services/api';
import { Client } from '@/app/interfaces/client';
import Pagination from '@/app/components/Pagination';
import TotalClients from '@/app/components/TotalClients';
import EditClientModal from '@/app/components/Modals/EditClientModal';


export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [totalClients, setTotalClients] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(16);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

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

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setEditModalOpen(true);
  };

  const handleCloseModals = () => {
    setEditModalOpen(false);
    setSelectedClient(null);
  };

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
            companyValuation={client.companyValuation}
            onEdit={() => handleEditClient(client)}
            onDelete={() => console.log('Deletar', client.id)}
            onSelect={()=> console.log('ok')}
          />
        ))}
      </div>

      <button className="w-full bg-transparent border-2 border-orange-500 text-orange-500 font-semibold mt-4 py-2 px-4 rounded-md">Criar Cliente</button>

      {/* Componente de paginação */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />

       {/* Modais */}
       {isEditModalOpen && selectedClient && (
        <EditClientModal client={selectedClient} onClose={handleCloseModals} onUpdate={function (): void {
          throw new Error('Function not implemented.');
        } } />
      )}
    </div>
  );
}
