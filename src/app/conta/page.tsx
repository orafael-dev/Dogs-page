"use client";

import { useUser } from "@/context/user-context";
import React from "react";

export default function ContaPage() {
  const { user } = useUser();
  return (
    <div>
      <h1>Conta: {user?.nome}</h1>
    </div>
  );
}
