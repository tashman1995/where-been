import React from "react";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import "~/styles/globals.css";
import { getMyImages } from "~/server/db/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return images.map((image) => (
    <div key={image.id} className="w-48">
      <img src={image.url} alt="Hello gallery" />
      <div>{image.name}</div>
    </div>
  ));
}

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
