import styled, { css } from "styled-components";

interface ContainerProps {
  width: string;
  height: string;
  variant: "primary" | "secondary" | "tertiary";
}

export const Container = styled.button<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.color["yellow-300"]};
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${(props) => props.theme.color["blue-400"]};
      color: ${(props) => props.theme.color["white"]};
      font-weight: ${(props) => props.theme.fontWeight.extrabold};
      font-size: ${(props) => props.theme.fontSize.SM};
    `}

    ${(props) =>
    props.variant === "tertiary" &&
    css`
      background-color: ${(props) => props.theme.color["gray-50"]};
      color: ${(props) => props.theme.color["blue-400"]};
      font-weight: ${(props) => props.theme.fontWeight.extrabold};
      font-size: ${(props) => props.theme.fontSize.SM};
    `}

   
  &:disabled {
    background-color: rgb(244, 211, 94, 0.8);
  }
`;
