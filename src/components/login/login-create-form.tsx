"use client";

import styles from "./login-form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import React from "react";
import ErrorMessage from "@/components/helper/error-message";
import userPost from "@/actions/user-post";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Cadastrar</Button>
      )}
    </>
  );
}

export default function LoginCreateForm() {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) {
      window.location.href = "/conta";
    }
  }, [state.ok]);

  return (
    <form action={action} className={styles.form}>
      <Input label="Usuário" name="username" type="text" />
      <Input label="E-mail" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ErrorMessage error={state.error} />
      <FormButton />
    </form>
  );
}
