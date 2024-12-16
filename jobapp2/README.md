# 求人検索アプリ (Job Search App)

## 概要
求人情報を検索、フィルタリング、投稿するシンプルなアプリケーションです。React と TypeScript を使用し、CSS でスタイルを整えています。

---

## 機能
1. **求人一覧の表示**: 初期データから求人情報を一覧表示。
2. **フィルタリング機能**: 求人カテゴリや年収で求人情報を絞り込み。
3. **求人投稿**: 新しい求人情報を追加（フロントエンドのみ、リロードでデータはリセット）。

---

## 使用技術
- **React**: コンポーネントベースのUI構築。
- **TypeScript**: 型安全なアプリケーション構築。
- **CSS**: スタイルを個別のCSSファイルに分離し適用。

---

## ディレクトリ構成

```plaintext
jobapp2/
├── public/                   # 静的アセット
│   └── react.svg             # ロゴファイル
├── src/                      # ソースコード
│   ├── assets/               # 画像やアイコン
│   ├── components/           # 再利用可能なコンポーネント
│   │   ├── FilterSidebar.tsx # サイドバー（フィルタ機能）
│   │   ├── Header.tsx        # 固定ヘッダー
│   │   ├── JobList.tsx       # 求人一覧表示
│   │   └── JobPostForm.tsx   # 求人投稿フォーム
│   ├── styles/               # CSSファイル
│   │   ├── global.css        # 全体のスタイル
│   │   ├── job-list.css      # 求人一覧用のスタイル
│   │   └── job-post.css      # 求人投稿用のスタイル
│   ├── types/                # TypeScript 型定義
│   │   └── Job.ts            # Jobデータの型定義
│   ├── App.tsx               # アプリ全体のルートコンポーネント
│   └── main.tsx              # Reactエントリーポイント
├── .gitignore                # Git管理対象外ファイル
├── index.html                # HTMLテンプレート
├── package.json              # 依存関係とスクリプト
└── README.md                 # このドキュメント
