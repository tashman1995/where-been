"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../../utils/uploadThing";

export function TopNav() {
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Where Been</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
