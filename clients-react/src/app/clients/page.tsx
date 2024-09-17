'use client'

import { useEffect, useState } from 'react';
import ClientCard from '../components/ClientCard';
import Pagination from '../components/Pagination';
import { getClients } from '../../services/api';

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number; // Altere isso para companyValue se necessário
  createdAt: string;
  updatedAt: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients(currentPage - 1, limit);
        setClients(data.clients);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClients();
  }, [currentPage, limit]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSelect = (clientId: number) => {
    console.log('Cliente selecionado:', clientId);
  };

  const handleEdit = (clientId: number) => {
    console.log('Editando cliente:', clientId);
  };

  const handleDelete = (clientId: number) => {
    console.log('Excluindo cliente:', clientId);
  };

  return (
    <div>
      <div className="p-4">
        <h1>Lista de Clientes</h1>

        {/* Renderização de cards de clientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {clients.map((client: Client) => (
            <ClientCard
              key={client.id}
              id={client.id}
              name={client.name}
              salary={client.salary}
              companyValue={client.companyValuation}
              onSelect={() => handleSelect(client.id)}
              onEdit={() => handleEdit(client.id)}
              onDelete={() => handleDelete(client.id)}
            />
          ))}
        </div>

        {/* Paginação */}
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}
