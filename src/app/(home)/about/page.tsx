import Link from "next/link";

//localhost:4000/about
export default function AboutPage() {
  return (
    <div>
      <h1>Hello AboutPage</h1>
      <div>
        <Link href="/" replace={true}>กลับหน้าหลัก</Link>
        {/* replace คือ ทับ history stack page */}
      </div>
    </div>
  );
}