import AppliedJobCard from "@/components/card/applied-job-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SharedJobsPage = () => {
  return (
    <div className="space-y-7">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-0">
        <div>
          <h1 className="text-2xl font-bold text-brand">Shared Jobs</h1>
          <p>List of jobs you have posted.</p>
        </div>
        <Link
          href="/jobs/new"
          className={cn(buttonVariants({ variant: "brand", size: "sm" }))}
        >
          POST JOB
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <AppliedJobCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SharedJobsPage;
