import Header from './components/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className='flex flex-col justify-between'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
