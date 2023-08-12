import Link from "next/link";
import AboutContent from "../ui/AboutContent";
import { notFound } from "next/navigation";

//localhost:4000/about

async function getData() {
  // const res = await fetch('https://api.codingthailand.com/api/version'); //SSG
  // const res = await fetch("https://api.codingthailand.com/api/version", {
  //   //ISR
  //   next: { revalidate: 10 }, // ดึงข้อมูลมาใหม่ทุก 10 Sec
  // });

  const res = await fetch("https://api.codingthailand.com/api/version", {  //ISR
   cache:'no-store', // ข้อมูลจะอัพเดต เมื่อ refresh  //SSR
  });

  // if (res.status === 404) {
  //   notFound();
  // }

  if (!res.ok) {
    throw new Error("ไม่สามารถดึงข้อมูลจาก server ได้");
  }
  return res.json();
}

export default async function AboutPage() {
  const data = await getData();
  return (
    <>
      <AboutContent data={data} />
    </>
  );
}
