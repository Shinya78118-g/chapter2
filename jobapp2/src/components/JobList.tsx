import React, { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { Job } from "../types/Job";

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minSalary, setMinSalary] = useState<number | "">("");

  const filteredJobs = jobs.filter((job) => {
    return (
      (selectedCategory === "" || job.category === selectedCategory) &&
      (minSalary === "" || job.salary >= minSalary)
    );
  });

  return (
    <div className="job-list-container">
      <div className="sidebar">
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setMinSalary={setMinSalary}
        />
      </div>
      <div className="main-content">
        <h2>求人一覧</h2>
        <ul>
          {filteredJobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>カテゴリ: {job.category}</p>
              <p>年収: {job.salary}万円</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
