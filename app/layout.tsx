import type { Metadata } from "next";
import "./globals.scss";
import QueryDataProvider from '@/data/queryprovider/QueryDataProvider'
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";


export const metadata: Metadata = {
  title: "Belshaw Cleaning Services",
  description: "Domestic and industrial cleaning services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryDataProvider>
          <Nav />
        {children}
        <Footer />
        </QueryDataProvider>
      </body>
    </html>
  );
}
