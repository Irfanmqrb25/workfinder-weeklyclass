"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignLeft, Layers } from "lucide-react";
import Link from "next/link";

const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <AlignLeft />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex items-center gap-2">
          <Layers className="text-brand" />
          <h1 className="text-xl font-bold">WorkFinder</h1>
        </div>
        <ul className="mt-10 space-y-4">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
