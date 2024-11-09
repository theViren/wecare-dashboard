import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Pageheader from "@/components/page-header";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <title>WeCare</title>
        </head>
        <body>
        <script src="https://wecare-widget.vercel.app/widget.umd.js"></script>          <Pageheader />
        <my-widget project-id="13"></my-widget>
        {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
