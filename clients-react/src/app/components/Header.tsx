import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Teddy Open Finance</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/clients" className="text-orange-500 hover:underline">
              Clientes
            </Link>
          </li>
          <li>
            <Link href="/clients/selected" className="hover:underline">
              Clientes Selecionados
            </Link>
          </li>
          <li>
            <Link href="/logout" className="hover:underline">
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
