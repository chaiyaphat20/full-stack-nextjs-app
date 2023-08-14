import NewsTypeEdit from "./NewsTypeEdit";

interface ITypeProps {
  params: { id: string };
}

export default function EditPage({ params }: ITypeProps) {
  return (
    <>
      <NewsTypeEdit params={params} />
    </>
  );
}
