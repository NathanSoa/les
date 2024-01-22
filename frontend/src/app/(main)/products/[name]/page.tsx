export default function Page({ params }: { params: { name: string } }) {
  return <div>{params.name}</div>
}
