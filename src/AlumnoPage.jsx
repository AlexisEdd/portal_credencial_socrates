import React from "react";
import { useParams } from "react-router-dom";
import { useAlumno } from "./hooks/useAlumno";
import { AlumnoCard } from "./components/AlumnoCard";

export function AlumnoPage() {
  const { matricula } = useParams();
  const { alumno, loading, error } = useAlumno(matricula);

  console.log("La API nos devolvio el alumno asi: ", alumno);

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

  if (!alumno) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-gray-500">
          No se encontraron datos para la matrícula ingresada.
        </p>
      </div>
    );
  }

  const alumnoData = Array.isArray(alumno) ? alumno[0] : alumno;

  return <AlumnoCard alumno={alumno} />;
}
