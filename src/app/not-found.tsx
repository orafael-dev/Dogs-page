import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container">
      <h1 className="title">Página não encotnrada.</h1>
      <Link
        className="button"
        href={"/"}
        style={{ marginBottom: "1rem", display: "inline-block" }}
      >
        Voltar para a Página Inicial
      </Link>
    </section>
  );
}
