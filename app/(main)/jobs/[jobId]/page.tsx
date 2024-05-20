import BodyJobDetail from "@/components/job/body-job-detail";
import HeaderJobDetail from "@/components/job/header-job-detail";
import { Separator } from "@/components/ui/separator";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

interface IParams {
  params: {
    jobId: string;
  };
}

const JobsDetailPage = async ({ params }: IParams) => {
  return (
    <div className="space-y-7">
      <Link
        href="/"
        className="flex items-center gap-2 group text-brand font-medium:"
      >
        <MoveLeft className="group-hover:-translate-x-2 transition-all duration-500" />
        <p>Back to Home</p>
      </Link>
      <div className="min-h-[calc(100vh-200px)] h-full flex flex-col bg-white shadow-md p-7 rounded-3xl gap-7">
        <HeaderJobDetail />
        <Separator />
        <BodyJobDetail />
      </div>
    </div>
  );
};

export default JobsDetailPage;
