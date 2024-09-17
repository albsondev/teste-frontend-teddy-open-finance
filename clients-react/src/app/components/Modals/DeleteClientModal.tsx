import { Client } from '../../interfaces/client';

interface DeleteClientModalProps {
  client: Client | null;
  onClose: () => void;
  onDelete: (client: Client) => Promise<void>;
}

export default function DeleteClientModal({ client, onClose, onDelete }: DeleteClientModalProps) {
  if (!client) return null; // Garante que o modal não será exibido sem cliente

  const handleDelete = () => {
    onDelete(client); // Passa o cliente selecionado para a função onDelete
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md">
        <h2>Excluir Cliente</h2>
        <p>Você tem certeza que deseja excluir o cliente {client.name}?</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={handleDelete}>
          Excluir
        </button>
        <button className="mt-2 text-gray-500" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
