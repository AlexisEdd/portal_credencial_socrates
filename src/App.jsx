import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AlumnoPage } from "./AlumnoPage";

// Componente para la pantalla inicial con buscador
function BuscadorHome() {
  const [inputMatricula, setInputMatricula] = useState("");
  const navigate = useNavigate();

  const handleBuscar = (e) => {
    e.preventDefault();
    if (inputMatricula.trim()) {
      // Redirige automáticamente a la URL del alumno
      navigate(`/alumno/${inputMatricula.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Consulta de Credenciales
        </h1>
        <p className="text-gray-500 text-sm">
          Escanea el código QR o ingresa la matrícula manualmente:
        </p>

        <form onSubmit={handleBuscar} className="flex gap-2">
          <input
            type="text"
            placeholder="Ej. 202600123"
            value={inputMatricula}
            onChange={(e) => setInputMatricula(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
          <button
            type="submit"
            className="bg-[#011a39] text-white px-5 py-2 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/alumno/:matricula" element={<AlumnoPage />} />
      <Route path="*" element={<BuscadorHome />} />
    </Routes>
  );
}

export default App;