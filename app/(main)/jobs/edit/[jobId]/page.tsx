import EditJobForm from "@/components/edit-job-form";
import axios from "axios";
import React from "react";

async function getJobById(jobId: string) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/job/${jobId}`
  );
  return res.data.data;
}

const EditJobPage = async ({ params }: { params: { jobId: string } }) => {
  const job = await getJobById(params.jobId);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <EditJobForm job={job} />
    </div>
  );
};

export default EditJobPage;
