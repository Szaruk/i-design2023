export default function PostDetails({params}: {params: { slug: string}}) {
  return (
    <div className="py-96">
      <h1>{params.slug}</h1>
    </div>
  );
}
