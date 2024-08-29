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
    <html lang="en">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <div
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
          <nav className="h-[60px] lg:w-[970px] flex max-w-full overflow-hidden">
            <div className="flex items-center w-[100px]">
              <span>okilberg.dev</span>
            </div>
            <div className="flex-1 flex justify-center items-center font-semibold">
              <span className="p-5 underline">Home</span>
              <span className="p-5">Experience</span>
              <span className="p-5">Projects</span>
              <span className="p-5">Blog</span>
            </div>
            <div className="flex items-center justify-end w-[100px]">
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
