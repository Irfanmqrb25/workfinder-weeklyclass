import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Clock5 } from "lucide-react";

const AppliedJobCard = () => {
  return (
    <Card>
      <CardHeader className="border-b-2">
        <AspectRatio ratio={1 / 1}>
          <Image alt="company image" src={"/tokopedia.jpeg"} fill />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-brand textlg">Tokopedia</h2>
          <Link
            href=""
            className="font-bold text-2xl line-clamp-2 hover:text-brand hover:-translate-y-1 transition-all duration-500"
          >
            Software Engineer
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-muted text-muted-foreground px-2 py-1 rounded-md uppercase">
              DEVELOPMENT
            </div>
            <div className="flex items-center gap-2">
              <Clock5 className="w-5 h-5 text-brand" />
              <p className="text-muted-foreground uppercase">FULL TIME</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppliedJobCard;
