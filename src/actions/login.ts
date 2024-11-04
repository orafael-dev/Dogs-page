"use server";

import { TOKEN_POST } from "@/app/functions/api";
import apiError from "@/app/functions/api-error";
import { cookies } from "next/headers";

export default async function login(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  try {
    if (!username || !password) {
      throw new Error("Usuário e senha são obrigatórios");
    }
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Usuário ou senha inválidos");
    }

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
