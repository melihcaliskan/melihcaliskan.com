"use client";
import "./globals.css";
import { ReactElement, useState } from "react";
import Dialog from "@/components/Dialog";
import Footer from "@/components/Footer";
import MenuToggle from "@/components/MenuToggle";

export default function RootLayout({ children }: { children: ReactElement }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function onToggle() {
    setMenuOpen((o) => !o);
  }

  return (
    <html lang="en">
      <body className="flex flex-col container mx-auto max-w-6xl h-screen pt-8 md:pt-24 px-8 lg:px-24 overflow-hidden">
        <header className="flex justify-end">
          <MenuToggle onClick={onToggle} />
        </header>
        <main className="flex flex-col">{children}</main>
        <Footer />
        <Dialog open={menuOpen} onToggle={onToggle} />
      </body>
    </html>
  );
}
