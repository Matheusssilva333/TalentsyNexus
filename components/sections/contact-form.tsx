"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Integrar serviço de envio de formulário após confirmação do cliente.
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="form-field">
        Nome
        <input name="name" type="text" autoComplete="name" placeholder="Como podemos chamar você?" required minLength={2} />
      </label>
      <label className="form-field">
        E-mail
        <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" required />
      </label>
      <label className="form-field">
        Mensagem
        <textarea name="message" placeholder="Conte um pouco sobre o que você precisa." required minLength={10} />
      </label>
      <button className="accent-button justify-self-start" type="submit">Enviar mensagem <span aria-hidden="true">→</span></button>
      {submitted ? <p className="form-status" role="status">Mensagem validada. Obrigado pelo contato! O envio ainda não está conectado.</p> : null}
    </form>
  );
}
