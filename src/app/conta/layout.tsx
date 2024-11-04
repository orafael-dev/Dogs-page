import ContaHeader from "@/components/conta/conta-header";

export default async function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <h1>Menu</h1>
      <ContaHeader />
      {children}
    </div>
  );
}
