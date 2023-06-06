import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface City {
  nome: string;
  codigo_ibge: string;
}

export const useCities = ({ uf }) => {
  const [cities, setCities] = useState<City[]>([]);

  const searchCities = useCallback(async () => {
    const api = `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`;

    try {
      const response = await axios.get(api);

      const data = response.data;

      setCities(data);
    } catch (error) {
      throw error;
    }
  }, [uf]);

  useEffect(() => {
    searchCities();
  }, [uf, searchCities]);

  return { cities };
};
