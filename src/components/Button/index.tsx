import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    type = "button",
    width = "4.5rem",
    height = "4.5rem",
    variant = "primary",
    children,
    ...rest
  } = props;

  return (
    <Container variant={variant} width={width} height={height} type={type} {...rest}>
      {children}
    </Container>
  );
};
