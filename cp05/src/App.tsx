import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      
      {/* HEADER FIXO NO TOPO */}
      <header className="bg-orange-600 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          
          {/* NOME DO SITE COM LINK PARA VOLTAR AO INÍCIO */}
          <Link to="/" className="text-2xl font-black tracking-tighter hover:text-orange-200 transition-all active:scale-95">
            SABORES DO FRONT
          </Link>
          
          <nav className="space-x-6">
            <Link to="/" className="font-bold hover:text-orange-200 transition">Início</Link>
            <Link to="/contato" className="font-bold hover:text-orange-200 transition">Sugerir Receita</Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO DAS PÁGINAS */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Outlet />
      </main>

      {/* RODAPÉ */}
      <footer className="bg-gray-900 text-white p-10 text-center mt-auto border-t-4 border-orange-600">
        <p className="font-black text-xl mb-4 tracking-widest text-orange-500 uppercase">Sabores do Front</p>
        <div className="text-gray-400 space-y-1 text-sm">
          <p>Desenvolvido por:</p>
          <p className="text-white font-medium">Murilo Bertassoli Massini - RA: 567383</p>
          <p className="text-white font-medium">Giovanni Sacristan - RA: 567548</p>
          <p className="text-white font-medium">Gabriel Deotti - RA: 567258</p>
          <p className="text-white font-medium">Caike Roberto de Souza Hollo - RM: 568104</p>
        </div>
      </footer>
      
    </div>
  );
}