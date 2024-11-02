import LoginRecoverForm from "@/components/login/login-recover-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esqueceu a senha",
  description: "Recupere a sua senha no site dogs",
};


export default async function RecoverPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Esqueceu a senha?</h1>
      <LoginRecoverForm />
    </div>
  );
}
