"use client";
import * as Yup from "yup";
import { Box, Button, Group, Text, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function NewsTypeCreate() {
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

  return (
    <Box maw={300}>
      <Text>เพิ่มข้อมูล</Text>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const response = await axios.post(
            "http://localhost:4000/api/newstype",
            { title: values.title }
          );
          if (response.data) {
            alert(response.data.message);
            router.replace("/dashboard/newstype");
          }
        })}
      >
        <TextInput
          withAsterisk
          label="ประเภทข่าว"
          {...form.getInputProps("title")}
        />

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
