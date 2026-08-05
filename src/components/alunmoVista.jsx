import React from "react";
import escudo_Socrates from "../assets/escudo_Socrates.png";

export function AlumnoCard({alumno}) {
  // CORRECCIÓN 1: Agregamos los paréntesis () para ejecutar el hook correctamente
  const {
    matricula,
    nombre,
    apellido,
    grado_grupo,
    foto_url,
    genero,
    estatus,
    seccion,
  } = alumno;

  return (
    <div className="space-y-4">
      {/* Tarjeta principal */}
      <header className=" bg-[#011a39]">
        <div className=" max-w-7xl mx-auto h-24 md:h-32 px-3 md:px-8 flex items-center justify-between">
          {/* logo socrates  */}
          <div className=" w-30 p-3 md:h-28 ">
            <img className="w-full" src={escudo_Socrates} alt="Instituto Socrates" />
          </div>

          {/* titulo escuela */}
          <h1 className="flex-1 text-center text-white font-bold text-base sm:text-xl md:text-3xl">
            INSTITUTO SOCRATES
          </h1>

          {/* Verificado */}
          <div className="flex items-center justify-end gap-3 w-72 md:gap-4">
            <div className=" w-8 h-8 md:w-10 md:h-10">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
              >
                <path
                  fill="#30a54d"
                  d="M400 48
        C446 48 470 92 506 112
        C542 132 596 122 632 148
        C668 174 674 228 700 264
        C726 300 774 332 774 400
        C774 468 726 500 700 536
        C674 572 668 626 632 652
        C596 678 542 668 506 688
        C470 708 446 752 400 752
        C354 752 330 708 294 688
        C258 668 204 678 168 652
        C132 626 126 572 100 536
        C74 500 26 468 26 400
        C26 332 74 300 100 264
        C126 228 132 174 168 148
        C204 122 258 132 294 112
        C330 92 354 48 400 48Z"
                />

                <path
                  fill="#000000"
                  d="M338 488
           L248 398
           C236 386 236 366 248 354
           C260 342 280 342 292 354
           L360 422
           L510 272
           C522 260 542 260 554 272
           C566 284 566 304 554 316
           L382 488
           C370 500 350 500 338 488Z"
                />
              </svg>
            </div>

            <div className=" items-end"></div>
            <div>
              <h2 className=" text-white font-bold text-xs sm:text-sm md:text-xl">
                Credencial verificada
              </h2>
              <p className="text-gray-200 text-[10px] sm:text-xs md:text-base">
                Consulta realizada el
              </p>

              <p className="text-gray-200 text-[10px] sm:text-xs md:text-base">
                16 de julio de 2026, 09:00 a.m.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-8 bg-white rounded-2xl shadow-md p-8">
        <div className="max-w-7xl mx-auto mt-6 bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
            {/* FOTO */}
            <div className="flex flex-col items-center">
              <img
                src={foto_url}
                alt="Alumno"
                className="w-56 h-72 md:w-72 md:h-96 object-cover rounded-2xl"
              />
            </div>

            {/* DATOS */}
            <div>
              {/* Nombre */}
              <h1
                className="
        font-bold
        text-slate-900
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl"
              >
                {nombre}
              </h1>

              {/* Datos */}
              <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8">
                {/* Matrícula */}
                <div className="border-b pb-4">
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Matrícula
                  </p>

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    {matricula}
                  </h3>
                </div>

                {/* Ciclo */}
                <div className="border-b pb-4">
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Ciclo Escolar
                  </p>

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    2026 - 2027
                  </h3>
                </div>

                {/* Nivel */}
                <div className="border-b pb-4">
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Nivel Educativo
                  </p>

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    {seccion?.nombre_seccion ?? "-"}
                  </h3>
                </div>

                {/* Vigencia */}
                <div className="border-b pb-4">
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Vigencia
                  </p>

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    Agosto 2026
                    <br />
                    Julio 2027
                  </h3>
                </div>

                {/* Grupo */}
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    {grado_grupo}
                  </p>

                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    3° A
                  </h3>
                </div>

                {/* Estado */}
                <div>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Estado
                  </p>

                  <span
                    className="
            inline-flex
            items-center
            mt-2
            bg-green-100
            text-green-700
            font-semibold
            rounded-lg
            px-3
            py-1
            text-xs
            sm:text-sm
            md:text-base"
                  >
                    ✓ {estatus}
                  </span>
                </div>
              </div>

              {/* Información adicional */}

              <div className="mt-12 border rounded-xl p-6">
                <h2
                  className="
          font-bold
          text-xl
          sm:text-2xl
          md:text-3xl
          mb-6"
                >
                  Información Adicional
                </h2>

                <div className="grid grid-cols-2 gap-y-6">
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Fecha de Expedición
                  </p>

                  <p className="text-sm sm:text-base md:text-lg">
                    01 de agosto de 2026
                  </p>

                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Credencial
                  </p>

                  <p className="text-sm sm:text-base md:text-lg">Escolar</p>

                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Tipo de Credencial
                  </p>

                  <p className="text-sm sm:text-base md:text-lg">Alumno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
