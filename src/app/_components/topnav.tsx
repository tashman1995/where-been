"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Where Been</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
            router.refresh();
          }} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
