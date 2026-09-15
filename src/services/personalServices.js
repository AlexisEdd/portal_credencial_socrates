import api from "./api";

export async function getPersonalMatricula(matricula) {
  try {
    const { data } = await api.get(`/personal/${matricula}`);

    // Si la API devuelve algo como { personal: [...] } o { data: [...] }
    const resultado = data.personal || data.data || data;

    // Si devuelve un arreglo vacío [], retornamos null para que la UI entienda que no hay datos
    if (Array.isArray(resultado) && resultado.length === 0) {
      return null;
    }

    return resultado;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("No se encontró ningún registro con esa matrícula");
    }
    throw new Error(error.response?.data?.message || "Error al consultar la matrícula");
  }
}