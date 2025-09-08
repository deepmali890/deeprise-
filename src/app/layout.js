import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import CustomCursor from "../../CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deep Rise | By DeepRise Solution ",
  description: "Deep Rise is a platform that helps you to plan your life and achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

<BackgroundGradientAnimation className={"w-full h-screen  flex items-center justify-center"} containerClassName="w-full h-screen">
      <div className=" w-[90%] h-[85%] bg-gradient-to-r z-[9999]  bg-white/40 backdrop-blur-md border-t-[1px] border-white rounded-3xl">
      <div className="grid grid-cols-[20%_80%] overflow-hidden h-full">
          <Sidebar />

          {children}
        </div>
      </div>
      <CustomCursor />
      </BackgroundGradientAnimation>
      
      </body>
    </html>
  );
}
