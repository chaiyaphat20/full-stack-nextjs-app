"use client";
//http://localhost:4000/dashboard/newstype/10/edit
import * as Yup from "yup";
import { Box, Button, Group, Text, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useCallback } from "react";

interface ITypeProps {
  params: { id: string };
}

export default function NewsTypeEdit({ params: { id } }: ITypeProps) {
  const router = useRouter();
  const schema = Yup.object().shape({
    title: Yup.string().required("ประเภทข่าวห้ามว่าง"),
  });

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      title: "",
    },
  });

  const getNewsTypeById = async (id: string) => {
    const response = await axios.get(
      `http://localhost:4000/api/newstype/${id}`
    );
    console.log(response.data);
    form.setValues({ title: response.data.title });
  };

  useEffect(() => {
    getNewsTypeById(id);
  }, [id]);

  return (
    <Box maw={300}>
      <Text>แก้ไขข้อมูล {id}</Text>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const response = await axios.put(
            "http://localhost:4000/api/newstype/" + id,
            { title: values.title }
          );
          if (response.data) {
            alert("แก้ไขสำเร็จ");
            router.replace("/dashboard/newstype");
          }
        })}
      >
        <TextInput label="ประเภทข่าว" {...form.getInputProps("title")} />

        <Group position="left" mt="md">
          <Button type="submit">Update</Button>
        </Group>
      </form>
    </Box>
  );
}
