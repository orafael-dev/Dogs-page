"use client";

import styles from "./login-form.module.css";
import { useFormState, useFormStatus } from "react-dom";
import Button from "@/components/forms/button";
import Input from "@/components/forms/input";
import React from "react";
import ErrorMessage from "@/components/helper/error-message";
import passwordLost from "@/actions/password-lost";

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button>Recuperar</Button>
      )}
    </>
  );
}

export default function LoginRecoverForm() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null,
  });

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    setUrl(window.location.href.replace("recover", "reset"));
  }, []);

  return (
    <form action={action} className={styles.form}>
      <Input label="Email / Usuário" name="login" type="text" />
      <input name="url" type="hidden" value={url} />
      <ErrorMessage error={state.error} />
      {state.ok ? (
        <p style={{ color: "#4c1" }}>Enviado! Verifique o seu e-mail.</p>
      ) : (
        <FormButton />
      )}
    </form>
  );
}
