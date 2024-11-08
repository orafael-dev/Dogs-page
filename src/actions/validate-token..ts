"use server";

import { TOKEN_VALIDATE_POST } from "@/app/functions/api";
import apiError from "@/app/functions/api-error";
import { cookies } from "next/headers";

export type StatsData = {
  id: number;
  title: string;
  acessos: string;
};

export default async function validateToken() {
  try {
    const token = cookies().get("token")?.value;
    if (!token) {
      throw new Error("Acesso negado.");
    }
    const { url } = TOKEN_VALIDATE_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) {
      throw new Error("Erro ao validar o token.");
    }
    const data = (await response.json()) as StatsData[];

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
