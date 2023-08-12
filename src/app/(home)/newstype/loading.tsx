"use client";
import { Center, Loader } from "@mantine/core";
export default function Loading() {
  return (
    <Center h={100}>
      <Loader />
      <h1> กำลังโหลด ...</h1>
    </Center>
  );
}
