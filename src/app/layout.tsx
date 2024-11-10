import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Where Been",
  description: "Trail visualiser",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Readonly<RootLayoutProps>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className={`font-sans dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
