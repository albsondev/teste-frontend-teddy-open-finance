import { Client } from '@/app/interfaces/client';
import { BsXLg } from 'react-icons/bs';

interface DeleteClientModalProps {
  client: Client | null;
  onClose: () => void;
  onDelete: (client: Client) => void;
}

export default function DeleteClientModal({ client, onClose, onDelete }: DeleteClientModalProps) {
  if (!client) return null; // Garante que o modal não será exibido sem cliente

  const handleDelete = () => {
    onDelete(client); // Passa o cliente selecionado para a função onDelete
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
      <div className='w-full flex flex-row justify-between items-center -mt-2 mb-2'>
      <span className='font-bold'>Excluir Cliente:</span>
      <span title='Fechar modal de edição' className='text-xl cursor-pointer' onClick={onClose}><BsXLg /></span>
      </div>
        <p>Você está prestes a excluir o cliente: <span className='font-bold'>{client.name}</span></p>
        <button 
          className="w-full mt-4 bg-orange-500 text-white font-bold px-4 py-2 rounded"
          onClick={handleDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}
