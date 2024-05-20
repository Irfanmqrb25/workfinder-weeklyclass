import { currentUser, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { Layers } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import MobileToggle from "./mobile-toggle";

const Navbar = async () => {
  const user: User | null = await currentUser();

  return (
    <nav className="flex fixed items-center w-full shadow-md px-4 lg:px-16 bg-white h-16 z-20">
      <div className="flex items-center w-full gap-4 justify-between">
        <div className="lg:flex items-center gap-2 hidden">
          <Layers className="text-brand" />
          <h1 className="font-bold text-xl">WorkFinder</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-10">
          <li className="hover:text-brand">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-brand">
            <Link href="/jobs/applied">Applied Jobs</Link>
          </li>
          <li className="hover:text-brand">
            <Link href="/jobs/shared">Shared Jobs</Link>
          </li>
        </ul>
        <MobileToggle />
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "brand", size: "sm" })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
