import { Metadata } from "next";
import LoginCreateForm from "../../../components/login/login-create-form";

export const metadata: Metadata = {
  title: "Crie a sua conta",
  description: "Crie a sua conta no site dogs",
};

export default async function CreatePage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCreateForm />
    </div>
  );
}
