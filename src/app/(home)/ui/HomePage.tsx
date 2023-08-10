"use client";

import { Button, Title } from "@mantine/core";
import { AppHero } from "./AppHero";
import { AppFeature } from "./AppFeature";

export default function HomeContent() {
  return (
    <>
      <AppHero />
      <AppFeature title="บริการของเรา" description="รายละเอียดสินค้า"/>
    </>
  );
}

//Client Component
