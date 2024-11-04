import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobListings />
      <ViewAllJobs />
    </section>
  );
};

export default JobsPage;
