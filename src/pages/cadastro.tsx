import { Button } from "@/components/Button";
import IdentityBanner from "@/components/IdentityBanner";
import { api } from "@/services/api";
import {
  BannerContainer,
  ButtonsActions,
  Container,
  Content,
  LoginForm,
  LoginPanel,
} from "@/styles/pages/Cadastro/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";

import { FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";

interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
}

const ValidateRegisterSchema = z
  .object({
    responsibleName: z.string().nonempty("Este campo é obrigatório"),
    email: z.string().email("Digite um email válido").nonempty("Este campo é obrigatório"),
    cep: z.string().min(8, "Digite um CEP válido").nonempty("Este campo é obrigatório"),
    address: z.string().nonempty("Este campo é obrigatório"),
    numberHouse: z.string().nonempty("Este campo é obrigatório"),
    complement: z.string(),
    district: z.string().nonempty("Este campo é obrigatório"),
    city: z.string().nonempty("Este campo é obrigatório"),
    state: z.string().nonempty("Este campo é obrigatório"),
    phone: z.string().nonempty("Este campo é obrigatório"),
    password: z
      .string()
      .min(8, "Sua senha deve conter pelo menos 8 caracteres")
      .regex(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
        "Sua senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um caracter especial e um número"
      )
      .nonempty("Este campo é obrigatório"),
    confirmPassword: z
      .string()
      .min(8, "Sua senha deve conter pelo menos 8 caracteres")
      .nonempty("Este campo é obrigatório"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem",
        path: ["confirmPassword"],
      });
    }
  });

type Form = typeof ValidateRegisterSchema & {
  confirmPassword: string;
};

export default function RegisterPage() {
  const [cepData, setCepData] = useState<Cep | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<Form>>({
    resolver: zodResolver(ValidateRegisterSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: Form) => {
    const { confirmPassword, ...formData } = data;

    try {
      const { data } = await api.post("/organizations", formData);
      console.log("data => ", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInsertCep = async (event: FocusEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value || value.length === 0) {
      reset({
        address: "",
        district: "",
        city: "",
        state: "",
      });
      return;
    }

    const cep = event.target.value;
    const api = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const { data } = await axios.get<Cep>(api);

      setCepData(data);

      reset({
        address: data.logradouro,
        district: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
    } catch (error) {}
  };

  return (
    <Container>
      <Content>
        <BannerContainer>
          <IdentityBanner />
        </BannerContainer>
        <LoginPanel>
          <h1>Cadastre sua organização</h1>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="responsibleName">
              Nome do responsável
              <input type="text" id="responsibleName" {...register("responsibleName")} />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" id="email" {...register("email")} />
              {errors.email?.message}
            </label>
            <label htmlFor="CEP">
              CEP
              <InputMask
                mask="99999-999"
                type="text"
                id="cep"
                {...register("cep")}
                onBlur={handleInsertCep}
              />
              {errors.cep?.message}
            </label>
            <label htmlFor="address">
              Endereço
              <input type="text" id="address" {...register("address")} />
              {errors.address?.message}
            </label>
            <label htmlFor="numberHouse">
              Número
              <input type="number" id="numberHouse" {...register("numberHouse")} />
              {errors.numberHouse?.message}
            </label>
            <label htmlFor="number-house">
              Complemento
              <input type="text" id="complement" {...register("complement")} />
              {errors.complement?.message}
            </label>
            <label htmlFor="district">
              Bairro
              <input type="text" id="district" {...register("district")} />
              {errors.district?.message}
            </label>
            <label htmlFor="city">
              Cidade
              <input type="text" id="city" {...register("city")} />
              {errors.city?.message}
            </label>
            <label htmlFor="state">
              Estado
              <input type="text" id="state" {...register("state")} />
              {errors.state?.message}
            </label>
            <label htmlFor="phone">
              Whatsapp
              <InputMask mask="(99) 99999-9999" type="tel" id="phone" {...register("phone")} />
              {errors.phone?.message}
            </label>
            <label htmlFor="password">
              Senha
              <input type="password" id="password" {...register("password")} />
              {errors.password?.message}
            </label>
            <label htmlFor="confirmPassword">
              Confirmar Senha
              <input type="password" id="confirm-password" {...register("confirmPassword")} />
              {errors.confirmPassword?.message}
            </label>

            <ButtonsActions>
              <Button variant="secondary" type="submit" width="100%">
                Cadastrar
              </Button>
              <Link href="/login">
                <Button variant="tertiary" width="100%">
                  Já tenho uma conta
                </Button>
              </Link>
            </ButtonsActions>
          </LoginForm>
        </LoginPanel>
      </Content>
    </Container>
  );
}
