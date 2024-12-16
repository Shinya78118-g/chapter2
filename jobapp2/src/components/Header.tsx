import React from "react";

interface HeaderProps {
  goToList: () => void;
  goToPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ goToList, goToPost }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#007bff", color: "#fff" }}>
      <h1>求人検索アプリ</h1>
      <nav>
        <button onClick={goToList} style={{ marginRight: "10px", background: "none", color: "#fff", border: "none", cursor: "pointer" }}>
          求人検索
        </button>
        <button onClick={goToPost} style={{ background: "none", color: "#fff", border: "none", cursor: "pointer" }}>
          求人投稿
        </button>
      </nav>
    </header>
  );
};

export default Header;
