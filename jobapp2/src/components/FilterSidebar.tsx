import React from "react";

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setMinSalary: (salary: number | "") => void;
}

const jobCategories = [
  "エンジニア", "デザイン", "マーケティング",
  "営業", "財務・経理", "カスタマーサポート",
  "事務", "医療・介護"
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  setMinSalary
}) => {
  return (
    <aside className="filter-sidebar">
      <h2>求人カテゴリ</h2>
      <ul>
        {jobCategories.map((category) => (
          <li key={category}>
            <label>
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() =>
                  setSelectedCategory(selectedCategory === category ? "" : category)
                }
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <label>年収:
          <select
            onChange={(e) => setMinSalary(e.target.value ? parseInt(e.target.value) : "")}
          >
            <option value="">選択してください</option>
            <option value="300">300万円以上</option>
            <option value="400">400万円以上</option>
            <option value="500">500万円以上</option>
          </select>
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
