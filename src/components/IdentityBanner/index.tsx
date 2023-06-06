import Image from "next/image";
import { Container } from "./styles";

import dogFriends from "../../assets/dog-friends.png";
import logotipo from "../../assets/logotipo.svg";

export default function IdentityBanner() {
  return (
    <Container>
      <header>
        <Image src={logotipo} alt="logo" width={174} priority />
      </header>
      <div>
        <Image src={dogFriends} alt="" width={384} priority />
      </div>
    </Container>
  );
}
