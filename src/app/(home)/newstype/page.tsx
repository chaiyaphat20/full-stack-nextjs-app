import { findAllNewsType } from "@/services/newstype.service";

export default async function NewsTypePage() {
  const data = await findAllNewsType(); //ใช้ได้ที่ server page เท่านั้น
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}
