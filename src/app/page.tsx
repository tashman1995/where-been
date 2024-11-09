import React from "react";
import { db } from "~/server/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import "~/styles/globals.css";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

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
