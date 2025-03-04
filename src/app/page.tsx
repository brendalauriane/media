import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode="modal">
          <button>Sign up</button>
          </SignInButton> 
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <button>Sign in</button>
    </div>
  );
}
