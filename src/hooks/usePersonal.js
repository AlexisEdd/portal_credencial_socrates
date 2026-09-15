import { useState, useEffect } from "react";
import { getPersonalMatricula } from "../services/personalServices"; // Ajusta la ruta a tu service

export function usePersonal(matricula) {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!matricula) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getPersonalMatricula(matricula)
      .then(setPersonal)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [matricula]);

  return { personal, loading, error };
}
