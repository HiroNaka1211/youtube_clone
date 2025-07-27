"use client";

import { Button } from "@/components/ui/button";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";

import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      {/* When signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* When not signed in */}
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none hover:border-transparent [&_svg]:size-5"
          >
            <UserCircleIcon className="size-4" />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
