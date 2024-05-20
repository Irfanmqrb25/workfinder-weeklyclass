import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Clock5 } from "lucide-react";

const JobListCard = () => {
  return (
    <Card className="flex flex-col lg:flex-row gap-4 px-7 py-6 shadow rounded-xl">
      <CardHeader className="p-0 rounded-2xl overflow-hidden shadow-md w-[110px] h-[110px] hover:-translate-y-1 border transition-all duration-500">
        <AspectRatio ratio={1 / 1}>
          <Image
            alt="company image"
            src={"/tokopedia.jpeg"}
            fill
            objectFit="cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-0 flex-col gap-4 lg:gap-0 lg:justify-between">
        <h1 className="font-semibold text-lg text-brand">Tokopedia</h1>
        <Link
          href=""
          className="font-bold text-2xl hover:text-brand hover:translate-y-1 transition-all duration-500"
        >
          Software Engineer
        </Link>
        <div className="flex items-center gap-4">
          <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md">
            DEVELOPMENT
          </div>
          <div className="flex items-center gap-2">
            <Clock5 className="w-5 h-5 text-brand" />
            <p className="text-muted-foreground uppercase">FULL TIME</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobListCard;
