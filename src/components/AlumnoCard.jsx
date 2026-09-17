import React from "react";
import escudo_Socrates from "../assets/escudo_Socrates.png";
import {
  UserCheck,
  GraduationCap,
  Users,
  Calendar,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const FOTO_DEFAULT =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='250' viewBox='0 0 24 24' fill='%2394a3b8'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

export function AlumnoCard({ alumno }) {
  if (!alumno) return null;

  const data = Array.isArray(alumno) ? alumno[0] : alumno;
  if (!data) return null;

  const {
    matricula = "Sin matrícula",
    nombre = "",
    apellido = "",
    grado_grupo = "Sin asignar",
    foto_url,
    estatus = "Activo",
    nivel_educativo,
    seccion,
    ciclo_nombre,
    ciclo,
    vigencia,
    fecha_expedicion,
    
  } = data;

  const obtenerCct = () => {
    // 1. Si la API ya trae la CCT explícitamente en el objeto, usar esa
    if (data.cct) return data.cct;
    if (seccion?.cct) return seccion.cct;

    // 2. Mapeo fallback según el ID de Sección o Nombre del Nivel
    const idSeccion = Number(data.id_seccion || seccion?.id_seccion);
    const nivel = (nivel_educativo || seccion?.nombre || data.nombre_seccion || "").toLowerCase();

    if (idSeccion === 1 || nivel.includes("primaria")) return "12PPR0233W";
    if (idSeccion === 2 || nivel.includes("secundaria")) return "12PES0137M";
    if (idSeccion === 3 || nivel.includes("preparatoria")) return "INS. SOC-250997";
    if (idSeccion === 4 || nivel.includes("preescolar")) return "12PJN0169V";

    return "No especificado";
  };

  const cctTexto = obtenerCct();

  const nombreCompleto = `${nombre} ${apellido}`.trim() || "Nombre del Alumno";

  // Obtención dinámica del Nivel Educativo
  const obtenerNivelEducativo = () => {
    if (nivel_educativo) return nivel_educativo;
    if (seccion?.nombre) return seccion.nombre;
    if (data.nombre_seccion) return data.nombre_seccion;

    const id = Number(data.id_seccion || seccion?.id_seccion);
    if (id === 1) return "Primaria";
    if (id === 2) return "Secundaria";
    if (id === 3) return "Preparatoria";
    if (id == 4) return "Preescolar";

    return "No especificado";
  };

  const nivelEducativo = obtenerNivelEducativo();

  // Formateador de Fecha
  const formatearFecha = (fechaIso, formatoLargo = false) => {
    if (!fechaIso) return "No especificada";
    const fecha = new Date(fechaIso);
    return fecha.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: formatoLargo ? "long" : "numeric",
      year: "numeric",
    });
  };

  const vigenciaTexto = vigencia || "Agosto 2026 - Julio 2027";
  const cicloTexto = ciclo_nombre || ciclo?.nombre || "2026 - 2027";
  const expedicionTexto =
    formatearFecha(fecha_expedicion, true) !== "No especificada"
      ? formatearFecha(fecha_expedicion, true)
      : "01 de agosto de 2026";

  // Fecha y hora actual de la consulta
  const fechaConsulta = new Date().toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const horaConsulta = new Date().toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-800 flex flex-col justify-between font-sans">
      {/* 1. Header Azul Oscuro */}
      <header className="bg-[#0b1329] text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={escudo_Socrates}
              alt="Instituto Sócrates"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-3 text-right">
            <div className="bg-emerald-500/20 p-2 rounded-full text-emerald-400">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h2 className="font-bold text-sm sm:text-base leading-tight">
                Credencial Verificada
              </h2>
              <p className="text-xs text-slate-400">
                Consulta realizada el
                <br />
                {fechaConsulta}, Hora: {horaConsulta}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Cuerpo Principal (Tarjeta Blanca Central) */}
      <main className="flex-grow px-4 -mt-2 pb-12">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-slate-100">
          {/* Bloque del Perfil del Alumno */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-100">
            {/* Foto del Alumno */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[240px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={foto_url || FOTO_DEFAULT}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = FOTO_DEFAULT;
                  }}
                  alt={`Foto de ${nombreCompleto}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Datos del Alumno */}
            <div className="md:col-span-8 flex flex-col justify-between h-full">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b1329] mb-6 text-center md:text-left">
                {nombreCompleto}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {/* Matrícula */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Matrícula
                    </p>
                    <p className="font-bold text-slate-900 text-base">
                      {matricula}
                    </p>
                  </div>
                </div>

                {/* Ciclo Escolar */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Ciclo Escolar
                    </p>
                    <p className="font-bold text-slate-900 text-base">
                      {cicloTexto}
                    </p>
                  </div>
                </div>

                {/* Nivel Educativo */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Nivel Educativo
                    </p>
                    <p className="font-bold text-slate-900 text-base">
                      {nivelEducativo}
                    </p>
                  </div>
                </div>

                {/* Vigencia */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Vigencia
                    </p>
                    <p className="font-bold text-slate-900 text-base leading-tight">
                      {vigenciaTexto}
                    </p>
                  </div>
                </div>

                {/* Grado y Grupo */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-600 rounded-xl">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Grado y Grupo
                    </p>
                    <p className="font-bold text-slate-900 text-base">
                      {grado_grupo}
                    </p>
                  </div>
                </div>

                {/* Estado */}
                <div className="flex items-start gap-3">
                  <div className="p-1 text-emerald-600">
                    <CheckCircle2 className="w-7 h-7 fill-emerald-100" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-1">
                      Estado
                    </p>
                    <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                      ALUMNO {estatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información Adicional */}
          <div className="mt-8 bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
            <h3 className="font-bold text-slate-900 text-base mb-4">
              Información Adicional
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500">CCT</span>
                <span className="font-medium text-slate-800">{cctTexto}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-500">Tipo de Credencial</span>
                <span className="font-medium text-slate-800">Alumno</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer Rojo Guinda */}
      <footer className="bg-[#5c0612] text-white py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left text-xs">
          <div>
            <p className="font-bold tracking-wider text-sm">
              INSTITUTO SÓCRATES
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-300">Contacto</p>
            <p className="text-slate-100 mt-0.5"> 744 485 7483</p>
          </div>

          <div>
            <p className="font-semibold text-slate-300">Sitio Oficial</p>
            <a
              href="https://institutosocrates.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-100 hover:text-blue-400 underline mt-0.5 inline-block transition-colors"
            >
              institutosocrates.mx
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
