interface TotalClientsProps {
    totalClients: number;
  }
  
  export default function TotalClients({ totalClients }: TotalClientsProps) {
    return (
      <div className="flex flex-row content-center align-content-center mb-4">
        <h1 className="text-xl font-bold">{totalClients}</h1>
        <p className="mt-1 mx-1">clientes Encontrados</p>
      </div>
    );
  }
  