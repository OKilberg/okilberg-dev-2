import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "okilberg.dev",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <div
        id="home"
          className=""
          style={{
            backgroundImage: `url('/bg2.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "16px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <nav className="h-[60px] lg:w-[970px] flex w-full max-w-full px-4 lg:p-0 overflow-x-scroll overflow-y-hidden lg:overflow-hidden">
            <div className="flex items-center w-[100px] uppercase text-sm tracking-tighter text-gray-700">
              <span>okilberg.dev</span>
            </div>
            <div className="flex-1 flex justify-center items-center font-semibold">
              <a href="#home" className="p-5 underline underline-offset-4">Home</a>
              <a href="#experience" className="p-5">Experience</a>
              <a href="#projects" className="p-5">Projects</a>
              <a href="#blog" className="p-5">Blog</a>
            </div>
            <div className="flex items-center justify-end w-[100px] font-semibold">
              <span>Contact</span>
            </div>
          </nav>
          {children}
          <footer>Footer Section</footer>
        </div>
      </body>
    </html>
  );
}
