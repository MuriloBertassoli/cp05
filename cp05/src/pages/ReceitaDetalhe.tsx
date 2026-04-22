import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ReceitaDetalhe() {
  const { id } = useParams(); 
  
  const [receita, setReceita] = useState<any>(null);

  useEffect(() => {
    fetch('/data/receitas.json')
      .then(res => res.json())
      .then(data => {
        const receitaEncontrada = data.find((r: any) => r.id === Number(id));
        setReceita(receitaEncontrada);
      })
      .catch(err => console.error("Erro ao carregar detalhes:", err));
  }, [id]);

  if (!receita) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-2xl font-bold text-gray-500">Carregando receita...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mt-6">
      <Link to="/" className="text-orange-600 font-bold hover:underline flex items-center mb-6">
        <span className="mr-2">←</span> Voltar para o Cardápio
      </Link>
      
      <div className="border-b border-gray-200 pb-6 mb-6">
        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase mb-3">
          {receita.categoria}
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900">{receita.nome}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Coluna dos Ingredientes */}
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <h3 className="text-2xl font-bold text-orange-900 mb-4 flex items-center">
            🛒 Ingredientes
          </h3>
          <ul className="space-y-2 text-gray-800 font-medium">
            {receita.ingredientes.map((ingrediente: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna do Modo de Preparo e Tempo */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            👨‍🍳 Modo de Preparo
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {receita.modoPreparo}
          </p>

          <div className="inline-flex items-center bg-gray-100 p-4 rounded-xl border border-gray-200">
            <span className="text-2xl mr-3">⏱️</span>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Tempo Estimado</p>
              <p className="text-xl font-bold text-gray-900">{receita.tempo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}