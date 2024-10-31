export default async function PhotoIdPage({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div>
      <h1>PhotoId: {params.id}</h1>
    </div>
  );
}
