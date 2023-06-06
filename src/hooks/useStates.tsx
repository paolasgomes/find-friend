import axios from "axios";
import { useCallback, useEffect, useState } from "react";

interface State {
  id: number;
  sigla: string;
  nome: string;
}

export const useStates = () => {
  const [states, setStates] = useState<State[]>([]);

  const searchStates = useCallback(async () => {
    const api = "https://brasilapi.com.br/api/ibge/uf/v1";

    try {
      const response = await axios.get(api);

      const data = response.data;

      setStates(data);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    searchStates();
  }, [searchStates]);

  return { states };
};
