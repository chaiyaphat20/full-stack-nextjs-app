"use client";

import React, { useEffect, useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Group,
  useMantineTheme,
  MediaQuery,
  Burger,
  Title,
  Button,
  Container
} from "@mantine/core";
import { MainLinks } from "./_mainLinks";
import { User } from "./_user";
import { useRouter } from "next/navigation";
// import { Logo } from "./_logo";

export default function DLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const router = useRouter();

  useEffect(() => {
    console.log("D layout");
  })

  return (
    <AppShell
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Title order={3}>ระบบจัดการข่าวสาร</Title>

            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                // mr="xl"
              />
            </MediaQuery>

            <MediaQuery smallerThan="md" styles={{ display: "none" }}>
              <Group>
                <Button
                  variant="default"
                  onClick={() => {
                    router.replace("../");
                  }}
                >
                  ออกจากระบบ
                </Button>
              </Group>
            </MediaQuery>
          </Group>
        </Header>
      }
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
    >
      {children}
    </AppShell>
  );
}
