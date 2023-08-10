import { Metadata } from "next";

export const metadata:Metadata = {
  title:'เกี่ยวกับเรา',
  description:'ระบบจัดการข้อมูล'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>AboutLayout Web Header</h2>
      <hr />
      {children}
      <hr />
      <h2>AboutLayout Web Footer</h2>
    </div>
  );
}
