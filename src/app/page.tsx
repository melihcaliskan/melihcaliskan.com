import { ReactElement } from "react";
import { HeroText } from "@/components/HeroText";
import Layout from "./layout";

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
