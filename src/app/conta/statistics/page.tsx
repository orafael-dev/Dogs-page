import statsGet from "@/actions/stats-get";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AccountStats = dynamic(
  () => import("@/components/conta/conta-statistics"),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas | Minha Conta",
};

export default async function EstatisticsPage() {
  const { data } = await statsGet();
  if (!data) {
    return null;
  }
  return (
    <section>
      <AccountStats data={data} />
    </section>
  );
}
