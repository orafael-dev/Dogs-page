"use server";

import { USER_POST } from "@/app/functions/api";
import apiError from "@/app/functions/api-error";
import login from "./login";

export default async function userPost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) {
      throw new Error("Usuário e senha são obrigatórios");
    }
    if (password.length < 6) {
      throw new Error("Senha deve ter no mínimo 6 caracteres");
    }
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Email ou usuário já cadastrado");
    }

    const { ok } = await login({ data: null, ok: true, error: "" }, formData);

    if (!ok) {
      throw new Error("Erro ao logar");
    }

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}