import { useState } from 'react';
import { createClient } from '@/services/api'; // Importando a função da API
import { Client } from '@/app/interfaces/client'; // Importando a interface Client
import { BsXLg } from 'react-icons/bs';

interface CreateClientModalProps {
  onClose: () => void;
  onCreate: (newClient: Client) => void; // O tipo do novo cliente deve ser Client
}

export default function CreateClientModal({ onClose, onCreate }: CreateClientModalProps) {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState(0);
  const [companyValue, setCompanyValue] = useState(0);

  const handleSubmit = async () => {
    try {
      // Chama a API para criar o novo cliente
      const newClient: Client = await createClient({
        name,
        salary,
        companyValuation: companyValue,
      });
      onCreate(newClient); // Adiciona o novo cliente à lista
      onClose(); // Fecha o modal
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
        <div className='w-full flex flex-row justify-between items-center -mt-2 mb-2'>
        <div className='w-full flex flex-row justify-between items-center -mt-2 mb-2'>
            <span className='font-bold'>Cadastrar Cliente:</span>
            <span title='Fechar modal de edição' className='text-xl cursor-pointer' onClick={onClose}><BsXLg /></span>
        </div>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="border-2 p-2 rounded w-full mt-2"
        />
        <input
          value={salary}
          onChange={(e) => setSalary(parseFloat(e.target.value))}
          placeholder="Salário"
          className="border-2 p-2 rounded w-full mt-2"
          type='number'
        />
        <input
          value={companyValue}
          onChange={(e) => setCompanyValue(parseFloat(e.target.value))}
          placeholder="Valor da Empresa"
          className="border-2 p-2 rounded w-full mt-2"
          type='number'
        />
        <button
          className="w-full mt-4 bg-orange-500 text-white font-bold px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Criar Cliente
        </button>
      </div>
    </div>
  );
}
