import JobListCard from "@/components/card/job-list-card";
import { Job } from "@/index";
import axios from "axios";

async function getJobs() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/job`);
  return res.data.data;
}

export default async function Home() {
  const jobs: Job[] = await getJobs();

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome to <span className="text-brand underline">WorkFinder</span>
        </h1>
        <p>Find job and position you want</p>
      </div>
      <div className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col gap-4 w-full flex-1">
          {jobs.map((job) => (
            <JobListCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
