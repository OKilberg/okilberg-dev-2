import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HiOutlineArrowUp } from "react-icons/hi";

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
              <a href="#home" className="p-5 underline underline-offset-4">
                Home
              </a>
              <a href="#experience" className="p-5">
                Experience
              </a>
              <a href="#projects" className="p-5">
                Projects
              </a>
              <a href="#blog" className="p-5">
                Blog
              </a>
            </div>
            <div className="flex items-center justify-end w-[100px] font-semibold">
              <span>Contact</span>
            </div>
          </nav>
          {children}
          <footer className="lg:h-[346px] lg:p-0 p-12 w-full overflow-hidden gap-7 flex flex-col justify-center items-center bg-slate-900/[.96]">
            <div className="lg:w-[976px] flex flex-col gap-7">
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold text-slate-100">
                  okilberg.dev
                </h3>
                <a href="#contact" className="text-xl font-semibold text-slate-100">
                  Contact
                </a>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-lg font-light text-slate-400">
                  © Oscar Orava Kilberg
                </p>
                <div className="flex flex-col font-semibold">
                  <a
                    href="#contact"
                    className="text-lg text-right text-slate-400"
                  >
                    Terms of Use
                  </a>
                  <a
                    href="#contact"
                    className="text-lg text-right text-slate-400"
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
              <hr className="border-slate-600"/>
              <div className="flex flex-row lg:justify-between gap-6 lg:gap-0 text-slate-400 font-semibold overflow-x-scroll lg:overflow-hidden">
                <a href="#home" className="flex items-center gap-1">
                  Home <HiOutlineArrowUp/>
                  <i></i>
                </a>
                <a href="#experience" className="">
                  Experience
                </a>
                <a href="#projects" className="">
                  Projects
                </a>
                <a href="#blog" className="">
                  Blog
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
