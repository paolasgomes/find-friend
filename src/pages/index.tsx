import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import dogFriends from "../assets/dog-friends.png";
import logotipo from "../assets/logotipo.svg";

import { Button } from "@/components/Button";
import SelectInput from "@/components/Select";
import { useCities } from "@/hooks/useCities";
import { useStates } from "@/hooks/useStates";
import {
  Container,
  Content,
  FindAFriend,
  FindAFriendText,
  Header,
  SearchAFriend,
  TextContent,
  Wrapper,
} from "@/styles/pages/Home/styles";
import { useCallback, useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

const HomePage = () => {
  const [state, setState] = useState<Option | null>(null);
  const [city, setCity] = useState<Option | null>(null);

  const { cities } = useCities({ uf: state?.value ?? "SP" });
  const { states } = useStates();

  const [loading, setLoading] = useState(true);

  const [isValid, setIsValid] = useState(false);

  const normalizedStates = states.map((state) => {
    return { value: state.sigla, label: state.sigla };
  });

  const normalizedCities = cities.map((city) => {
    return { value: city.nome, label: city.nome };
  });

  const handleInitialValues = useCallback(() => {
    if (!state && !city) {
      const initialState = normalizedStates.find((state) => state.value === "SP");
      const initialCity = normalizedCities[0];

      setState(initialState);
      setCity(initialCity);
    }
  }, [normalizedCities, normalizedStates, state, city]);

  const handleStateValue = (state: Option) => {
    setState(state);

    setCity(null);
  };

  const handleCityValue = (city: Option) => {
    setCity(city);
  };

  useEffect(() => {
    if (states.length && cities.length) {
      setLoading(false);

      handleInitialValues();
    }

    city === null && setIsValid(true);
  }, [states, cities, handleInitialValues, city, setIsValid, isValid]);

  const handleSubmit = () => {
    window.location.href;
  };

  return (
    <Container>
      <Header>
        <Image src={logotipo} alt="" />

        <p>
          Você tem uma organização e gostaria de acessar aos seus anúncios?
          <Link href="/login">Clique aqui</Link>
        </p>
      </Header>

      <Content>
        <Wrapper>
          <TextContent>
            <h1>Leve a felicidade para o seu lar</h1>
          </TextContent>
          <div>
            <Image src={dogFriends} alt="" priority />
          </div>
        </Wrapper>

        <FindAFriend>
          <FindAFriendText>
            <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
          </FindAFriendText>

          <SearchAFriend>
            <label>Busque um amigo: </label>
            <SelectInput
              width="4.5rem"
              backgroundColor="#F15156"
              options={normalizedStates}
              onChange={handleStateValue}
              isLoading={loading}
              value={state}
            />
            <SelectInput
              options={normalizedCities}
              onChange={handleCityValue}
              isLoading={loading}
              value={city}
              placeholder="Selecione uma opção"
            />
            <Link href="/localizacoes">
              <Button type="submit" disabled={isValid} onSubmit={handleSubmit}>
                <FaSearch size={22} color="#0D3B66" />
              </Button>
            </Link>
          </SearchAFriend>
        </FindAFriend>
      </Content>
    </Container>
  );
};

export default HomePage;
