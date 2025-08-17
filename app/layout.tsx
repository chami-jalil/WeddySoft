import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "Gratech | Software Development & IT Solutions React NextJs Template",
  description: "Software Development & IT Solutions React NextJs Template",
  keywords: [
    "Software",
    "IT",
    "Agency",
    "Javascript",
    "Typescript",
    "React",
    "nextjs",
  ],
  authors: [
    {
      name: "Gramentheme",
      url: "https://themeforest.net/user/gramentheme",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
