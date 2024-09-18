import { useState, useEffect } from 'react';
import { Client } from '@/app/interfaces/client';
import { BsXLg } from 'react-icons/bs';
import { updateClient } from '@/services/api'; // Importando a função de API

interface EditClientModalProps {
   client: Client;
  onClose: () => void;
  onUpdate: (updatedClient: Client) => void;
}

export default function EditClientModal({ client, onClose, onUpdate }: EditClientModalProps) {
  const [name, setName] = useState(client?.name || '');
  const [salary, setSalary] = useState(client?.salary);
  const [companyValue, setCompanyValue] = useState(client?.companyValuation);

  useEffect(() => {
    if (client) {
      setName(client.name);
      setSalary(client.salary);
      setCompanyValue(client.companyValuation);
    }
  }, [client]);

  const handleSubmit = async () => {
    try {
      // Chama a API para atualizar o cliente
      const updatedClient = await updateClient(client.id, {
        name,
        salary,
        companyValuation: companyValue,
      });
      onUpdate(updatedClient); // Atualiza o cliente na lista de clientes
      onClose(); // Fecha o modal
    } catch (error) {
      console.error("Erro ao atualizar o cliente:", error);
    }
  };

  // Se não houver cliente, não renderiza o conteúdo
  if (!client) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
      <div className='w-full flex flex-row justify-between items-center -mt-2 mb-2'>
        <span className='font-bold'>Editar Cliente:</span>
        <span title='Fechar modal de edição' className='text-xl cursor-pointer' onClick={onClose}><BsXLg /></span>
      </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="border-2 p-2 rounded w-full mt-2"
        />
        <input
          type='number'
          value={salary}
          onChange={(e) => setSalary(parseFloat(e.target.value))}
          placeholder="Salário"
          className="border-2 p-2 rounded w-full mt-2"
        />
        <input
          type='number'
          value={companyValue}
          onChange={(e) => setCompanyValue(parseFloat(e.target.value))}
          placeholder="Valor da Empresa"
          className="border-2 p-2 rounded w-full mt-2"
        />
        <button
          className="w-full mt-4 bg-orange-500 text-white font-bold px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Editar Cliente
        </button>
      </div>
    </div>
  );
}
