interface ClientCardProps {
    id: number;
    name: string;
    salary: number;
    companyValue: number;
    onSelect: () => void;
    onEdit: () => void;
    onDelete: () => void;
  }
  
  export default function ClientCard({name, salary, companyValue, onSelect, onEdit, onDelete }: ClientCardProps) {
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>Salário: R${salary}</p>
        <p>Valor da Empresa: R${companyValue}</p>
        <div className="flex justify-between mt-4">
          <button onClick={onSelect} className="text-green-500 hover:text-green-700">
            Selecionar
          </button>
          <button onClick={onEdit} className="text-blue-500 hover:text-blue-700">
            Editar
          </button>
          <button onClick={onDelete} className="text-red-500 hover:text-red-700">
            Excluir
          </button>
        </div>
      </div>
    );
  }
  