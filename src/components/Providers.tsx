"use client";

import { MantineProvider } from "@mantine/core";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "700"],
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider withGlobalStyles withNormalizeCSS theme={{fontFamily:sarabun.style.fontFamily}}>{children}</MantineProvider>;
}
