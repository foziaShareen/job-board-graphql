import JobList from '../components/JobList';
import { jobs } from '../lib/fake-data';
import {getJobs} from '../graphql/queries.js'
getJobs().then(jobs=>console.log(jobs))

function HomePage() {
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
