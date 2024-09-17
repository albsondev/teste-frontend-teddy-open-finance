'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function Header() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Recupera o nome do usuário do cookie
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png" // Substitua pelo caminho correto da sua logo
            alt="Teddy Open Finance"
            className="h-8 mr-2"
          />
        </div>

        {/* Centro: Links de Navegação */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/clients" className="text-orange-500 hover:underline">Clientes</Link>
          </li>
          <li>
            <Link href="/clients/selected" className="hover:underline">Clientes Selecionados</Link>
          </li>
          <li>
            <Link href="/logout" className="hover:underline">Sair</Link>
          </li>
        </ul>

        {/* Direita: Nome do Usuário */}
        <div className="text-lg font-semibold text-gray-700">
          Olá, <span className="font-bold">{username || 'Usuário'}</span>!
        </div>
      </nav>
    </header>
  );
}
