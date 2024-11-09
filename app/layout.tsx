import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Sidebar from "./layout/sidebar";
import Footer from "./layout/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Manage all the your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div className="md:flex">
          <Sidebar />

          <main className="min-h-screen w-full">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
