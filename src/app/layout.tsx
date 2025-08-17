import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "Portfolio | %s"
  },
  icons: "/images/me-logo-og.png",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Portfolio | Danyal Lotfi App",
    description: "This website introduces me to the field of front-end programming.",
    siteName: "Portfolio",
    type: "website",
    images: [
      {
        url: "/images/danyal-animation-logo.png",
        width: 500,
        height: 500,
        alt: "Danyal Lotfi Banner",
      },
    ],
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
        <Analytics />
      </body>
    </html>
  );
}
