export default async function UserProfilePage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <div>
      <h1>UserProfile: {params.user}</h1>
    </div>
  );
}
