"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UploadButton } from "~/utils/uploadthing";
import LoadingSpinnerSVG from "./loading-spinner-svg";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Where Been</Link>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
            router.refresh();
            toast.dismiss("upload-begin");
            toast("Image uploaded successfully");
          }} onUploadBegin={() => {
            toast(<div className="flex align gap-3"><LoadingSpinnerSVG />Uploading image...</div>, {
              duration: 9000000,
              id: "upload-begin",
            });
          }}/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
