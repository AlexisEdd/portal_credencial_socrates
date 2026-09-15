import api from "./api";

// Creamos una funcion para obtener lo alumnos, este servise sera el principal, para crear nuestro hook donde
// alojaremos el alumno en un estado

export async function getAlumnosMatricula(matricula) {
  try {
    const { data } = await api.get(`/alumnos/${matricula}`);
    return data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Alumno no encontrado");
    }
    throw new Error("Error al consultar matricula");
  }
}

