import api from "./api";

// Creamos una funcion para obtener lo alumnos
export async function getAlumnosMatricula(matricula) {
  try {
    const { data } = await api.get(`/alumno/matricula/${matricula}`);
    return data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Alumno no encontrado");
    }
    throw new Error("Error al consultar matricula");
  }
}
