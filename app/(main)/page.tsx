import JobListCard from "@/components/card/job-list-card";

export default function Home() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <JobListCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
