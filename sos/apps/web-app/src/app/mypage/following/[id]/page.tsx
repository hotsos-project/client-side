export default function FollowingDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>팔로잉 상세 - ID: {params.id}</h1>
    </div>
  );
}
