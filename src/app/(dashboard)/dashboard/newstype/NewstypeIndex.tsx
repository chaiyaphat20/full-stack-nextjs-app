"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Space } from "@mantine/core";
import { IconTrash, IconPencil } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface INewsTypes {
  id: number;
  title: string;
  createAt: string;
}

export default function NewsTypeIndex() {
  const router = useRouter();

  const [newsType, setNewsType] = useState<INewsTypes[]>();
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/api/newstype");
    setNewsType(response.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const onDelete = async (id: number) => {
    const isConfirm = window.confirm("แน่ใจว่าต้องการลบ ID: " + id);
    if (isConfirm) {
      const response = await axios.delete(
        `http://localhost:4000/api/newstype/${id}`
      );
      alert(response.data.message);
      getData();
    }
  };

  return (
    <>
      <Link href="/dashboard/newstype/create">เพิ่มข้อมูล</Link>
      <Space h={3} />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ประเภทข่าว</th>
            <th>วันที่สร้าง</th>
          </tr>
        </thead>
        <tbody>
          {newsType &&
            newsType.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.createAt}</td>
                <td>
                  <Button
                    leftIcon={<IconPencil />}
                    onClick={() => {
                      router.push(`/dashboard/newstype/${item.id}/edit`);
                    }}
                    variant="white"
                  >
                    {" "}
                    แก้ไข{" "}
                  </Button>{" "}
                  |
                  <Button
                    leftIcon={<IconTrash />}
                    onClick={() => onDelete(item.id)}
                    variant="white"
                  >
                    {" "}
                    ลบ{" "}
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}
