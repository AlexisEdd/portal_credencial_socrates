import { useState, useEffect } from "react";
import { getAlumnosMatricula } from "../services/alumnoServices";

export function useAlumno(matricula) {
  const [alumno, setAlumno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!matricula) return;
    setLoading(true);
    setError(null);
    getAlumnosMatricula(matricula)
      .then(setAlumno)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [matricula]);
  return { alumno, loading, error };
}
