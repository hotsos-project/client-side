export default function EmergencyAlertDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>재난문자 상세 - ID: {params.id}</h1>
    </div>
  );
}
