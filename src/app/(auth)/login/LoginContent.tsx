"use client";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginContent() {
  const router = useRouter();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("ป้อนข้อมูลอีเมลด้วย")
      .email("รูปแบบ Email ไม่ถูกต้อง"),
    password: yup
      .string()
      .required("ป้อนข้อมูลอีเมลด้วย")
      .min(3, "รหัสผ่านต้องอย่างน้อย 3 ตัวอักษรขึ้นไป"),
  });
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, //isSubmitting ถ้ากำหนดกดจะเป็น true
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "all", //check ตั้งแต่ พิมพ์ หรือ อื่นๆ
  });
  const onSubmit = async (data: FormData) => {
    console.log(data);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      alert(result.error);
    } else {
      router.replace("/dashboard");
    }
    return false; //return false
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          เข้าสู่ระบบ
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            {...register("email")}
            label="Email"
            placeholder="you@mantine.dev"
            error={errors.email && <span>{errors.email.message}</span>}
          />
          <PasswordInput
            {...register("password")}
            label="Password"
            placeholder="Your password"
            mt="md"
            error={errors.password && <span>{errors.password.message}</span>}
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={isSubmitting}>
            Login
          </Button>
        </Paper>
      </Container>
    </form>
  );
}
