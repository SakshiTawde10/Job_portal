// Folder: /pages/job/[id].tsx
import { useRouter } from 'next/router';
import { jobs, Job } from '../../data/jobs';
import Link from 'next/link';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  const allJobs = [...jobs.product, ...jobs.engineering];
  const job = allJobs.find(job => job.id === Number(id));

  if (!job) return <p className="text-center">Job not found</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">{job.title} at {job.company}</h1>
      <p className="text-gray-600">{job.location} - {job.type}</p>
      <p className="text-gray-500">Experience: {job.experience}</p>
      <p className="mt-4">{job.description}</p>
      <Link href="/">
        <button className="mt-4 bg-purple-600 text-white px-4 py-2">Back to Jobs</button>
      </Link>
    </div>
  );
}
