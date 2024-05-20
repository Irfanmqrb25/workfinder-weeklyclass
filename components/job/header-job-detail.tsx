"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { CircleDollarSign, Clock5, MapPin, Pen, Trash } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";

const HeaderJobDetail = () => {
  const { userId } = useAuth();

  const isJobApplied: Boolean = false;

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7 lg:gap-0">
      <div className="space-y-8">
        <div className="flex gap-7 flex-col lg:flex-row">
          <div className="w-[110px] h-[110px] shadow-md rounded-3xl overflow-hidden border">
            <AspectRatio ratio={1 / 1}>
              <Image
                alt="company image"
                src={"/tokopedia.jpeg"}
                fill
                objectFit="cover"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3 lg:gap-0 lg:justify-between">
            <p className="font-semibold text-lg text-brand">Tokopedia</p>
            <p className="font-bold text-3xl">Software Engineer</p>
            <p className="bg-muted text-muted-foreground px-2 py-1 rounded-md w-fit">
              DEVELOPMENT
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock5 className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <p className="text-muted-foreground uppercase">Full Time</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <p className="text-muted-foreground uppercase">JAKARTA</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign
              className="w-6 h-6 text-brand"
              strokeWidth={1.5}
            />
            <p className="text-muted-foreground uppercase">1000</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="flex text-muted-foreground text-lg font-medium lg:justify-end">
          {format(new Date("2024-04-04"), "MMMM d, yyyy")}
        </p>
        {userId === "1" ? (
          <div className="flex items-center gap-3 justify-end">
            <Button variant="brand" size="icon">
              <Pen />
            </Button>
            <Button variant="brand" size="icon">
              <Trash />
            </Button>
          </div>
        ) : isJobApplied ? (
          <Button variant="brand" className="w-full lg:w-fit">
            CANCEL APPLY
          </Button>
        ) : (
          <Button variant="brand" className="w-full lg:w-fit">
            APPLY JOB
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderJobDetail;
