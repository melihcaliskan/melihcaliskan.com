import { HeroText } from "@/components/HeroText";
import MenuToggle from "@/components/MenuToggle";
import Image from "next/image";

const d = new Date();
const year = d.getFullYear();

export default function Footer() {
  return (
    <footer className="z-50 py-6 border-solid border-t border-gray-200 dark:border-gray-800 max-h-[8vh]">
      <p className="transition-colors	ease-linear text-center text-gray-400 hover:text-gray-700	dark:text-gray-600 dark:hover:text-gray-300">{year} | @melih_caliskan</p>
    </footer>
  );
}
