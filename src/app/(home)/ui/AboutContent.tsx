'use client'
import { Container, Title, Text, Divider, Space } from "@mantine/core";
export default function AboutContent({data}:any) {
  return (
    <Container size="lg" mt={40}>
      <Title order={3}>เกี่ยวกับเรา</Title>
      <Divider mt={2} />

      <Text>Backend API Version {data.data.version} </Text>

      <Text fz="sm">
        {JSON.stringify(data)}
      </Text>
      <Space h="md" />
    </Container>
  );
}
