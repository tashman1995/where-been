import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";

export const metadata: Metadata = {
  title: "Where Been",
  description: "Trail visualiser",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`flex flex-col gap-4 font-sans`}>
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
