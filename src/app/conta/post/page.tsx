import AccountPhotoPost from "@/components/conta/conta-photo-post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postar | Minha Conta",
};

export default async function PostPage() {
  return (
    <div>
      <AccountPhotoPost />
    </div>
  );
}
