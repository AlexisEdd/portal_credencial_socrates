import React from "react";
import escudo_Socrates from "../assets/escudo_Socrates.png";

// Imagen por defecto en SVG local para evitar peticiones a servidores externos
const FOTO_DEFAULT =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 24 24' fill='%2394a3b8'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

export function AlumnoCard({ alumno }) {
  if (!alumno) return null;

  console.log("checa:", alumno);
  const data = Array.isArray(alumno) ? alumno[0] : alumno;
  // Si después de desempaquetar sigue vacío, retornamos null
  if (!data) return null;

  const {
    matricula = "Sin matrícula",
    nombre = "",
    apellido = "",
    grado_grupo = "Sin asignar",
    foto_url,
    estatus = "Inactivo",
    seccion,
  } = data; //

  const obtenerNivelEducativo = (item) => {
    // Si la API ya te manda el nombre directo (ej: item.nombre_seccion)
    if (item.nombre_seccion) return item.nombre_seccion;
    if (item.seccion?.nombre_seccion) return item.seccion.nombre_seccion;

    // Convertimos a número por si la API lo manda como String ("1", "2", "3")
    const id = Number(item.id_seccion || item.seccion);

    if (id === 1) return "Primaria";
    if (id === 2) return "Secundaria";
    if (id === 3) return "Preparatoria";

    return "No especificado";
  };

  const nivelEducativo = obtenerNivelEducativo(data);
  return (
    <div className="min-h-screen bg-slate-100 pb-10">
      {/* Header */}
      <header className="bg-[#011a39]">
        <div className="max-w-7xl mx-auto h-24 md:h-32 px-4 md:px-8 flex items-center justify-between">
          <div className="w-20 md:w-28 flex items-center">
            <img
              className="w-full h-auto"
              src={escudo_Socrates}
              alt="Instituto Socrates"
            />
          </div>

          <h1 className="flex-1 text-center text-white font-bold text-sm sm:text-xl md:text-3xl px-2">
            INSTITUTO SÓCRATES
          </h1>

          <div className="flex items-center justify-end gap-2 md:gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 shrink-0">
              <svg className="w-full h-full" viewBox="0 0 800 800">
                <path
                  fill="#30a54d"
                  d="M400 48 C446 48 470 92 506 112 C542 132 596 122 632 148 C668 174 674 228 700 264 C726 300 774 332 774 400 C774 468 726 500 700 536 C674 572 668 626 632 652 C596 678 542 668 506 688 C470 708 446 752 400 752 C354 752 330 708 294 688 C258 668 204 678 168 652 C132 626 126 572 100 536 C74 500 26 468 26 400 C26 332 74 300 100 264 C126 228 132 174 168 148 C204 122 258 132 294 112 C330 92 354 48 400 48Z"
                />
                <path
                  fill="#ffffff"
                  d="M338 488 L248 398 C236 386 236 366 248 354 C260 342 280 342 292 354 L360 422 L510 272 C522 260 542 260 554 272 C566 284 566 304 554 316 L382 488 C370 500 350 500 338 488Z"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-white font-bold text-xs sm:text-sm md:text-lg">
                Credencial verificada
              </h2>
              <p className="text-gray-200 text-[10px] sm:text-xs">
                Consulta realizada el 5 de agosto de 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Tarjeta con los datos cargados */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
          {/* FOTO SIN BUCLE INFINITO */}
          <div className="flex flex-col items-center">
            <img
              src={foto_url || FOTO_DEFAULT}
              onError={(e) => {
                e.target.onerror = null; // Corta el bucle de reintentos
                e.target.src = FOTO_DEFAULT;
              }}
              alt={`Foto de ${nombre}`}
              className="w-56 h-72 md:w-72 md:h-96 object-cover rounded-2xl shadow border bg-slate-100"
            />
          </div>

          {/* DATOS */}
          <div>
            <h1 className="font-bold text-slate-900 text-2xl sm:text-3xl md:text-4xl">
              {`${nombre} ${apellido}`.trim()}
            </h1>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6">
              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">Matrícula</p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800">
                  {matricula}
                </h3>
              </div>

              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Ciclo Escolar
                </p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800">
                  2026 - 2027
                </h3>
              </div>

              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Nivel Educativo
                </p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800">
                  {nivelEducativo}
                </h3>
              </div>

              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">Vigencia</p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800">
                  Agosto 2026 - Julio 2027
                </h3>
              </div>

              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">
                  Grado / Grupo
                </p>
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-slate-800">
                  {grado_grupo}
                </h3>
              </div>

              <div className="border-b pb-3">
                <p className="text-gray-500 text-xs sm:text-sm">Estado</p>
                <span className="inline-flex items-center mt-1 bg-green-100 text-green-700 font-semibold rounded-lg px-3 py-1 text-xs sm:text-sm">
                  ✓ {estatus}
                </span>
              </div>
            </div>

            <div className="mt-8 border rounded-xl p-5 bg-slate-50">
              <h2 className="font-bold text-lg sm:text-xl text-slate-800 mb-4">
                Información Adicional
              </h2>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <p className="text-gray-500">Credencial</p>
                <p className="font-medium text-slate-800">Escolar</p>

                <p className="text-gray-500">Tipo de Credencial</p>
                <p className="font-medium text-slate-800">Alumno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
