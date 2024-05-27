"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { CircleDollarSign, Clock5, MapPin, Pen, Trash } from "lucide-react";
import { format } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Job } from "@/index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface HeaderJobDetailProps {
  job: Job & {
    userId: string;
    appliers?: string[];
  };
}

const HeaderJobDetail = ({ job }: HeaderJobDetailProps) => {
  const router = useRouter();
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const isJobApplied = job.appliers?.find((applier) => applier === userId);

  const applyJob = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/apply`, {
        user_id: userId,
        job_id: job.id,
      });
      router.refresh();
      toast.success("Job applied successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const cancleApplyJob = async () => {
    setIsLoading(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/cancel`, {
        user_id: userId,
        job_id: job.id,
      });
      router.refresh();
      toast.success("Job canceled successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJob = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/job/${job.id}`);
      router.refresh();
      router.push("/jobs/shared");
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-7 lg:gap-0">
      <div className="space-y-8">
        <div className="flex gap-7 flex-col lg:flex-row">
          <div className="w-[110px] h-[110px] shadow-md rounded-3xl overflow-hidden border">
            <AspectRatio ratio={1 / 1}>
              <Image
                alt="company image"
                src={job.image}
                fill
                objectFit="cover"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3 lg:gap-0 lg:justify-between">
            <p className="font-semibold text-lg text-brand">{job.company}</p>
            <p className="font-bold text-3xl">{job.title}</p>
            <p className="bg-muted text-muted-foreground px-2 py-1 rounded-md w-fit">
              {job.category}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock5 className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <p className="text-muted-foreground uppercase">{job.status}</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand" strokeWidth={1.5} />
            <p className="text-muted-foreground uppercase">{job.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign
              className="w-6 h-6 text-brand"
              strokeWidth={1.5}
            />
            <p className="text-muted-foreground uppercase">{job.salary}</p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <p className="flex text-muted-foreground text-lg font-medium lg:justify-end">
          {format(new Date(job.createdAt), "MMMM d, yyyy")}
        </p>
        {userId === job.userId ? (
          <div className="flex items-center gap-3 justify-end">
            <Button variant="brand" size="icon">
              <Pen />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={deleteJob}
              disabled={isLoading}
            >
              <Trash />
            </Button>
          </div>
        ) : isJobApplied ? (
          <Button
            variant="destructive"
            className="w-full lg:w-fit"
            onClick={cancleApplyJob}
            disabled={isLoading}
          >
            CANCEL APPLY
          </Button>
        ) : (
          <Button
            variant="brand"
            className="w-full lg:w-fit"
            onClick={applyJob}
            disabled={isLoading}
          >
            APPLY JOB
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeaderJobDetail;
