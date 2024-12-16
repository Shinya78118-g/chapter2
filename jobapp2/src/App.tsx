import React, { useState } from "react";
import JobList from "./components/JobList";
import JobPostForm from "./components/JobPostForm";
import { Job } from "./types/Job";
import Header from "./components/Header";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: 1, title: '経験者歓迎！大手企業でのWebエンジニア募集', category: 'エンジニア', salary: 600 },
    { id: 2, title: '未経験OK！営業アシスタント急募', category: '営業', salary: 350 },
    { id: 3, title: 'グローバル企業でのマーケティングマネージャー', category: 'マーケティング', salary: 800 },
    { id: 4, title: 'UI/UXデザイナー募集！急成長中のスタートアップ', category: 'デザイン', salary: 550 },
    { id: 5, title: '大手製造業での生産管理スペシャリスト', category: '製造', salary: 650 },
    { id: 6, title: '急成長ベンチャーでの経理マネージャー募集', category: '財務・経理', salary: 700 },
    { id: 7, title: '大手IT企業での人事担当者募集', category: '人事', salary: 500 },
    { id: 8, title: '外資系企業でのカスタマーサポート担当募集', category: 'カスタマーサポート', salary: 400 },
    { id: 9, title: '看護師募集！大学病院での勤務', category: '医療・介護', salary: 550 },
    { id: 10, title: '一般事務スタッフ募集！週3日からOK', category: '事務', salary: 300 },
  ]);

  const [currentPage, setCurrentPage] = useState<"list" | "post">("list"); // ページ切り替え状態

  const addJob = (newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  return (
    <div>
      <Header goToList={() => setCurrentPage("list")} goToPost={() => setCurrentPage("post")} />
      {currentPage === "list" && <JobList jobs={jobs} />}
      {currentPage === "post" && <JobPostForm onJobPost={addJob} goToList={() => setCurrentPage("list")} />}
    </div>
  );
};

export default App;
