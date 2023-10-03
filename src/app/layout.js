
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siva portfolio",
  description: "Portfolio of a developer",
};
import { Providers } from "@/app/provider";
import Homepagelayout from "@/components/homepagelayout";


export default function RootLayout({ children }) {



  return (
    <html lang="en" >
      <body className={`${inter.className} w-vw`}  >
        <Providers>
          <Homepagelayout>{children}</Homepagelayout>
        </Providers>
      </body>
    </html>
  );
}
