// pages/engineering.tsx
import { useState } from "react";
import JobCard from "@/components/JobCard";
import { Job } from "@/types/job";

const engineeringJobs: Job[] = [
  { id: 1, company: "Google", role: "Software Engineer", posted: "05 Mar" },
  { id: 2, company: "Microsoft", role: "Frontend Developer", posted: "06 Mar" },
  { id: 3, company: "Amazon", role: "Backend Engineer", posted: "07 Mar" },
];

export default function EngineeringPage() {
  const [search, setSearch] = useState("");

  const filteredJobs = engineeringJobs.filter((job) =>
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Engineering Jobs</h1>
      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full p-2 mt-2 border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-4 mt-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
