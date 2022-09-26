import { useState } from "react";
import Jobs from './data.json';
import JobsList from "./components/JobsList";
import Search from "./components/Search";
function App() {
  const [jobs, setJobs] = useState(Jobs)
  const [search, setSearch] = useState([])
  return (
    <>
    <img className="bg" src="./images/bg-header-desktop.svg" alt=""/>
    <div className="pt-5 main">
      <Search key={'search'} search={search} handleSearch={setSearch} />
      <JobsList key={'list'} jobs={jobs} search={search} handleSearch={setSearch} />
    </div>
    </>
  );
}

export default App;
