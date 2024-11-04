import LoginResetForm from "@/components/login/login-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resetar a senha",
  description: "Resete a sua senha no site dogs",
};

type ResetSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetPage({ searchParams }: ResetSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resetar a Senha</h1>
      <LoginResetForm keyToken={searchParams.key} login={searchParams.login} />
    </div>
  );
}
