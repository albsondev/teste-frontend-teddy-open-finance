import { BsPlus, BsPencil, BsTrash } from 'react-icons/bs';

interface ClientCardProps {
  id: number;
  name: string;
  salary: number;
  companyValue: number;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function ClientCard({ name, salary, companyValue = 0, onSelect, onEdit, onDelete }: ClientCardProps) {
  return (
    <div className="bg-white border shadow-md rounded-lg p-4 flex flex-col items-center justify-between">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-sm">Salário: {salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p className="text-sm">Empresa: {companyValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

      <div className="flex flex-row items-center justify-between px-1 mt-4 w-full">
        <button
          className="text-4xl text-black"
          onClick={onSelect}
        >
          <BsPlus />
        </button>
        <button
          className="text-base text-black"
          onClick={onEdit}
        >
          <BsPencil />
        </button>
        <button
          className="text-base text-red-500"
          onClick={onDelete}
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
}
