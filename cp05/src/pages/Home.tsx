import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [receitas, setReceitas] = useState<any[]>([]);
  const [filtro, setFiltro] = useState<string>('Todas');

  useEffect(() => {
    fetch('/data/receitas.json')
      .then(res => res.json())
      .then(data => setReceitas(data))
      .catch(err => console.error("Erro ao carregar:", err));
  }, []);

  const categorias = ['Todas', 'Pratos Principais', 'Saladas', 'Sobremesas', 'Bebidas'];

  const contarPorCategoria = (cat: string) => {
    if (cat === 'Todas') return receitas.length;
    return receitas.filter(r => r.categoria === cat).length;
  };

  const receitasFiltradas = filtro === 'Todas' 
    ? receitas 
    : receitas.filter(receita => receita.categoria === filtro);

  return (
    <div className="pb-10">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">
          Explore o Nosso <span className="text-orange-600">Cardápio</span>
        </h2>
        <p className="text-gray-500 font-medium italic">Encontre a inspiração para a sua próxima refeição.</p>
      </div>
      
      {/* Botões de Categoria com Contadores */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categorias.map(cat => {
          const quantidade = contarPorCategoria(cat);
          const ativo = filtro === cat;

          return (
            <button 
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`flex flex-col items-center justify-center min-w-[120px] p-3 rounded-2xl font-bold transition-all duration-300 shadow-sm border ${
                ativo 
                  ? 'bg-orange-600 text-white scale-105 shadow-orange-200 shadow-xl border-orange-600' 
                  : 'bg-white text-gray-600 hover:border-orange-300 hover:text-orange-600 border-gray-200'
              }`}
            >
              <span className="text-sm uppercase tracking-wide">{cat}</span>
              <span className={`text-xl mt-1 ${ativo ? 'text-orange-100' : 'text-gray-400'}`}>
                {quantidade}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid de Receitas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {receitasFiltradas.map((receita) => (
          <div 
            key={receita.id} 
            className="group bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
          >
            <div className="relative overflow-hidden h-52">
              
              {/* AQUI ESTÁ A MUDANÇA DA IMAGEM! 👇 */}
              <img 
                src={receita.imagem || "https://placehold.co/500x350/orange/white?text=Sem+Foto"} 
                alt={receita.nome} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* 👆 FIM DA MUDANÇA DA IMAGEM */}

              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-orange-600 text-[10px] font-black px-3 py-1 rounded-lg uppercase shadow-sm">
                  {receita.categoria}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                {receita.nome}
              </h3>
              
              <div className="flex items-center text-gray-400 text-sm mb-6 font-medium">
                <span className="mr-4 flex items-center">
                  <span className="mr-1 italic text-orange-500 font-bold">⏱</span> {receita.tempo}
                </span>
                <span className="flex items-center">
                  <span className="mr-1 italic text-orange-500 font-bold">🍴</span> {receita.ingredientes.length} itens
                </span>
              </div>
              
              <Link 
                to={`/receita/${receita.id}`} 
                className="mt-auto block w-full text-center bg-gray-900 text-white px-4 py-3 rounded-2xl hover:bg-orange-600 font-bold transition-all transform active:scale-95 shadow-lg"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        ))}
      </div>

      {receitasFiltradas.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-xl font-medium">Ops! Nenhuma receita encontrada. 🥗</p>
        </div>
      )}
    </div>
  );
}