"use server";

import { PHOTOS_GET } from "@/app/functions/api";
import apiError from "@/app/functions/api-error";

export type Photo = {
  id: number;
  author: string;
  title: string;
  date: number;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
};

type PhotosGetParams = {
  page?: number;
  total?: number;
  user?: 0 | string;
};

export default async function photosGet({
  page = 1,
  total = 6,
  user = 0,
}: PhotosGetParams = {}) {
  try {
    const { url } = PHOTOS_GET({ page, total, user });
    const response = await fetch(url, {
      next: {
        revalidate: 10,
        tags: ["photos"],
      },
    });
    const data = (await response.json()) as Photo[];
    if (!response.ok) {
      throw new Error("Erro ao buscar fotos.");
    }

    return { data, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
