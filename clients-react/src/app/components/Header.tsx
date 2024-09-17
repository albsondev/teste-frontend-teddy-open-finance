'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Image from 'next/image';

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
    <header className="bg-white shadow-md p-4 py-4">
      <nav className="flex justify-between items-center w-3/4 mx-auto">
        <div className="flex items-center">
          <Image
            src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png" alt="Logo Teddy Open Finance"
            width={'100'}
            height={'100'}
          />
        </div>

        <ul className="flex space-x-8">
          <li>
            <Link href="/clients" className="text-orange-500 underline hover:text-orange-400 font-medium hover:no-underline	">Clientes</Link>
          </li>
          <li>
            <Link href="/clients/selected" className="hover:underline">Clientes Selecionados</Link>
          </li>
          <li>
            <Link href="/logout" className="hover:underline">Sair</Link>
          </li>
        </ul>

        <div className="text-lg font-normal text-gray-700">
          Olá, <span className="font-bold">{username || 'Usuário'}</span>!
        </div>
      </nav>
    </header>
  );
}
