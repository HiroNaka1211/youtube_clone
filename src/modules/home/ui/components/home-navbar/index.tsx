import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import { robotoCondensed } from "@/app/layout";

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[56px] bg-white flex items-center px-2  pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Sidebar and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="p-4 pr-0 flex items-center">
              <Image src="logo.svg" alt="logo" width={32} height={32} />
              <p
                className={`${robotoCondensed.className} inline-block transform scale-y-125 text-xl font-semibold tracking-[-1px] relative`}
              >
                CloneTube
                <span className="text-[10px] absolute -top-2 -right-3.5 transform-none tracking-normal">
                  JP
                </span>
              </p>
            </div>
          </Link>
        </div>

        {/* search bar */}
        <div className="flex-1  max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        <div className="flex-shrink-0 flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
