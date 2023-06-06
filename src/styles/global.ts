import { Nunito } from "next/font/google";
import { createGlobalStyle } from "styled-components";

const nunito = Nunito({ subsets: ["latin"] });

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; 
    -web-font-smoothing: 'antialiased';
  }

  @media screen and (max-width: 768px) {
  html {
    font-size: 93.75%;
  }
}

::-webkit-scrollbar {
  width: 8px;

}

::-webkit-scrollbar-track {
  background: #f1f1f1;

  border-radius: 8px;

}

::-webkit-scrollbar-thumb {
  background: #888;

  border-radius: 8px;

}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}


  body, input, textarea, button {
    font-family: ${nunito.style.fontFamily}, sans-serif;

    
  }

  button {
    cursor: pointer;

    border: 0;

    background-color: transparent;
  }

  [disabled] {
    cursor: not-allowed;
  }
`;
