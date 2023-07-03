import { ReactElement } from "react";
import { HeroText } from "@/components/HeroText";
import { Metadata } from "next";
import Layout from "./layout";

export const metadata: Metadata = {
  title: "Melih Çalışkan",
};

export default function Home() {
  return (
    <main>
      <HeroText />
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
