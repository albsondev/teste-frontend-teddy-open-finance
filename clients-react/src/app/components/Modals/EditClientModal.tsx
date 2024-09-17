import { useState, useEffect } from 'react';
import { Client } from '../../interfaces/client'; // Certifique-se de que a interface Client esteja sendo importada corretamente

interface EditClientModalProps {
  client: Client | null;
  onClose: () => void;
  onUpdate: (client: Client) => void; // Função para atualizar o cliente
}

export default function EditClientModal({ client, onClose, onUpdate }: EditClientModalProps) {
  // Mover os hooks para o início, antes da condição
  const [name, setName] = useState(client?.name || '');
  const [salary, setSalary] = useState(client?.salary || '');
  const [companyValue, setCompanyValue] = useState(client?.companyValue || '');

  // Usar o useEffect para atualizar os valores quando o cliente mudar
  useEffect(() => {
    if (client) {
      setName(client.name);
      setSalary(client.salary);
      setCompanyValue(client.companyValue);
    }
  }, [client]);

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    if (!client) return; // Garantir que o client não seja null
    const updatedClient: Client = {
      ...client,
      name,
      salary,
      companyValue,
    };
    onUpdate(updatedClient); // Atualiza o cliente com os novos valores
    onClose(); // Fecha o modal
  };

  // Se não houver cliente, não renderiza o conteúdo
  if (!client) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2>Editar Cliente</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="border p-2 rounded w-full mt-2"
        />
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salário"
          className="border p-2 rounded w-full mt-2"
        />
        <input
          value={companyValue}
          onChange={(e) => setCompanyValue(e.target.value)}
          placeholder="Valor da Empresa"
          className="border p-2 rounded w-full mt-2"
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Atualizar Cliente
        </button>
        <button className="mt-2 text-gray-500" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
