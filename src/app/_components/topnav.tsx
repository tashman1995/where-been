import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

export function TopNav() {
  return (
    <nav className="text-x1 flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Where Been</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
