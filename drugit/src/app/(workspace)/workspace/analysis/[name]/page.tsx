export default function Page({ params }: { params: { name: string } }) {
  return <div>Target: {params.name}</div>;
}
