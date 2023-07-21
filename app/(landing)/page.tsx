import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { createReadStream } from "fs";
import Link from "next/link";
import FileInput from "../components/file";
import { Button } from "@/components/ui/button";

export default function Home() {
  

  return (
    <div className="">
      <Link href="/sign-in">
        <Button>Sign in</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Register</Button>
      </Link>
      {/* <header className="py-4 flex justify-between items-center w-full">
        <h1 className="text-4xl font-bold uppercase">Balance Tracker</h1>
        <>
          <SignedOut>
            <Link href="/sign-in">Sign in</Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              userProfileMode="navigation"
              userProfileUrl="/user"
              afterSignOutUrl="/"
              afterMultiSessionSingleSignOutUrl="/"
            />
          </SignedIn>
        </>
      </header>
      <FileInput /> */}
    </div>
  );
}
