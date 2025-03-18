// Folder: /pages/index.tsx
import JobList from '../components/JobList';
import "../app/globals.css";
import Nav from '../components/Nav';


const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <JobList />
    </div>
  )
}

export default HomePage
