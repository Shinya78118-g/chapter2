import React, { useState } from "react";
import { Job } from "../types/Job";

interface JobPostFormProps {
  onJobPost: (newJob: Job) => void;
  goToList: () => void; // ページ切り替え用
}

const JobPostForm: React.FC<JobPostFormProps> = ({ onJobPost, goToList }) => {
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [salary, setSalary] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && category && salary) {
      const newJob: Job = {
        id: Date.now(),
        title,
        category,
        salary: Number(salary),
      };

      onJobPost(newJob); // 新しいジョブを親コンポーネントに渡す
      goToList(); // 投稿完了後、一覧ページへ戻る
    }
  };

  return (
    <div className="job-post-container">
      <h1 className="form-title">求人投稿</h1>
      <form  className="job-post-form" onSubmit={handleSubmit}>
        <div>
          <label>求人カテゴリ選択</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">カテゴリを選択</option>
            <option value="エンジニア">エンジニア</option>
            <option value="デザイン">デザイン</option>
            <option value="マーケティング">マーケティング</option>
            <option value="営業">営業</option>
            <option value="財務・経理">財務・経理</option>
            <option value="カスタマーサポート">カスタマーサポート</option>
            <option value="事務">事務</option>
            <option value="医療・介護">医療・介護</option>
          </select>
        </div>
        <div>
          <label>年収 (万円)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value ? parseInt(e.target.value) : "")}
            required
            placeholder="例: 600"
          />
        </div>
        <div>
          <label>求人タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="例: Webエンジニア募集"
          />
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  );
};

export default JobPostForm;
