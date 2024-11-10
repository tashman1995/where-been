import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import "~/styles/globals.css";
import Images from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <SignedOut>
          <div className="h-full w-full text-2xl">
            Sign in to see your images
          </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
