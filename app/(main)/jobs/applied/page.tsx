import AppliedJobCard from "@/components/card/applied-job-card";
import { Job } from "@/index";
import { auth } from "@clerk/nextjs";
import axios from "axios";

async function getAppliedJobs(userId: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/job/applier/${userId}`
  );
  return res.data.data;
}

const AplliedJobPage = async () => {
  const { userId } = auth();
  const appliedJobs: Job[] = await getAppliedJobs(userId!);

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-brand">Applied Jobs</h1>
        <p>A list of jobs that you have applied for.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appliedJobs.map((appliedJob) => (
          <AppliedJobCard key={appliedJob.id} job={appliedJob} />
        ))}
      </div>
    </div>
  );
};

export default AplliedJobPage;
