export default function SocialDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>게시판 상세 - ID: {params.id}</h1>
    </div>
  );
}
