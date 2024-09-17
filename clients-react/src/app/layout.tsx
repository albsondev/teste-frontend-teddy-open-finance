import Header from './components/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Header />
          <h1>Meu Sistema de Clientes</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 - Todos os direitos reservados</footer>
      </body>
    </html>
  );
}
