import { useForm } from "react-hook-form";

export default function Formulario() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
    alert("Sua receita foi enviada com sucesso!");
    reset(); 
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Sugerir Nova Receita</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Nome da Receita</label>
          <input 
            type="text" 
            {...register("nomeReceita", { required: "O nome da receita é obrigatório" })} 
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          {errors.nomeReceita && <p className="text-red-500 text-sm mt-1">{errors.nomeReceita.message as string}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Seu E-mail</label>
          <input 
            type="email" 
            {...register("email", { required: "O e-mail é obrigatório" })} 
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
        </div>

        <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded hover:bg-orange-700 transition">
          Enviar Receita
        </button>
      </form>
    </div>
  );
}