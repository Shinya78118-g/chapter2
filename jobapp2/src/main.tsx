import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";  // グローバルCSS
import "./styles/job-list.css"; // ジョブリスト用CSS
import "./styles/job-post.css"; // ジョブ投稿フォーム用CSS

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
