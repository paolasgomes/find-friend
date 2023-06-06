import { Button } from "@/components/Button";
import IdentityBanner from "@/components/IdentityBanner";
import { AuthContext, User } from "@/contexts/Auth";
import {
  BannerContainer,
  ButtonsActions,
  Container,
  Content,
  LoginForm,
  LoginPanel,
} from "@/styles/pages/Login/styles";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Form = z.infer<typeof ValidateUserSchema>;

const ValidateUserSchema = z.object({
  email: z.string().email("Digite um email válido").nonempty("Digite o seu email"),
  password: z.string().nonempty("Digite a sua senha"),
});

export default function Login() {
  const { signIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(ValidateUserSchema),
  });

  const onSubmit = async (data: User) => {
    await signIn(data);
  };

  return (
    <Container>
      <Content>
        <BannerContainer>
          <IdentityBanner />
        </BannerContainer>

        <LoginPanel>
          <h1>Boas-Vindas</h1>
          <LoginForm id="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                placeholder="nome@email.com"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label htmlFor="password">
              Senha
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </label>

            <ButtonsActions>
              <Button
                variant="secondary"
                type="submit"
                form="login-form"
                width="30.5rem"
                disabled={isSubmitting}
              >
                {!isSubmitting ? "Login" : <span></span>}
              </Button>
              <Link href="/cadastro">
                <Button variant="tertiary" width="30.5rem">
                  Cadastrar minha organização
                </Button>
              </Link>
            </ButtonsActions>
          </LoginForm>
        </LoginPanel>
      </Content>
    </Container>
  );
}
