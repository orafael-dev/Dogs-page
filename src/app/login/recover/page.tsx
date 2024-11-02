import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esqueceu a senha",
  description: "Recupere a sua senha no site dogs",
};

export default async function RecoverPage() {
  return (
    <div>
      <h1>Recover</h1>
    </div>
  );
}
