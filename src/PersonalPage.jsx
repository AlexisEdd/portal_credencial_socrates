import React from "react";
import { useParams } from "react-router-dom";
import { usePersonal } from "./hooks/usePersonal"; // Ajusta la ruta a tu hook
import { PersonalCard } from "./components/PersonalCard"; // Ajusta la ruta a tu componente

export function PersonalPage() {
  const { matricula } = useParams();
  const { personal, loading, error } = usePersonal(matricula);

  console.log("La API devolvió el personal así: ", personal);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-xl font-semibold text-slate-700 animate-pulse">
          Cargando credencial...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl max-w-md text-center shadow">
          <h2 className="text-lg font-bold mb-2">Error al consultar</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!personal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-gray-500">
          No se encontraron datos para la matrícula ingresada.
        </p>
      </div>
    );
  }

  return <PersonalCard personal={personal} />;
}
