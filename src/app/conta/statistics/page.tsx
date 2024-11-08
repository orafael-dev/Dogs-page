import statsGet from "@/actions/stats-get";
import AccountStats from "@/components/conta/conta-statistics";
import { Metadata } from "next";

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
