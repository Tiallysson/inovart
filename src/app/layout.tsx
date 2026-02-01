import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "700", variable: "--font-poppins"})

export const metadata: Metadata = {
  title: "Inovart Design",
  description: "Inovart by Jamerson Farias - Powered by Tiallysson Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
