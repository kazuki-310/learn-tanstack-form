# アーキテクチャ概要

TanStack Formを学習するためのNext.js 15 App Routerプロジェクトです。

## 主要技術スタック

- **フロントエンド**: Next.js 15（React 19、TypeScript、Tailwind CSS v4）
- **フォーム**: TanStack React Form（型安全なフォーム管理）
- **バリデーション**: Zod（スキーマベースバリデーション）
- **スタイリング**: Tailwind CSS v4（カスタムコンポーネント用）
- **開発ツール**: Biome（リンター・フォーマッター）、pnpm（パッケージマネージャー）

## ディレクトリ構造ガイドライン

このプロジェクトのディレクトリ構造を厳密に従ってください：

### App Router構造

- `src/app/` - ページとレイアウト
  - `layout.tsx` - ルートレイアウト
  - `(form)/` - フォーム関連のルートグループ
    - `layout.tsx` - フォーム専用レイアウト
    - `basic/` - 基本的なフォーム実装例
      - `page.tsx` - ページエントリー
      - `_components/` - ページ固有のコンポーネント
        - `basic-form.tsx` - メインフォームコンポーネント
      - `_lib/` - ページ固有のロジック
        - `schema.ts` - Zodバリデーションスキーマ
    - `server-functions/` - サーバーアクション例
      - `page.tsx` - サーバーアクション統合例

### 共有コンポーネント構造

- `src/components/` - 再利用可能なコンポーネント
  - `form-fields/` - フォームフィールドコンポーネント
    - `text-field.tsx` - テキスト入力フィールド
    - `checkbox-field.tsx` - チェックボックスフィールド
    - `select-field.tsx` - セレクトフィールド
  - `button/` - ボタンコンポーネント
    - `subscribe-button.tsx` - 送信ボタン
  - `layout/` - レイアウトコンポーネント

### フック・ユーティリティ構造

- `src/hooks/` - カスタムReactフック
  - `useAppForm.ts` - TanStack Form設定フック
- `src/context/` - Reactコンテキスト
  - `use-form-context.ts` - フォームコンテキスト定義
- `src/util/` - ユーティリティ関数
  - `cn.ts` - クラス名結合ユーティリティ（clsx + tailwind-merge）
- `src/css/` - グローバルスタイル
  - `globals.css` - Tailwind CSS設定とグローバルスタイル

### 設定ファイル

- `tsconfig.json` - TypeScript設定（`~/*`パスエイリアス設定済み）
- `biome.jsonc` - Biome（リンター・フォーマッター）設定
- `next.config.ts` - Next.js設定
- `package.json` - 依存関係とスクリプト設定

## 開発ワークフロー

### コード品質管理

- **Biome**: `pnpm run check` でリント・フォーマットチェック
- **型チェック**: TypeScriptの厳格モードで型安全性を保証
- **Next.js**: Turboモードで高速な開発体験

### フォーム開発パターン

1. **スキーマ定義**: `_lib/schema.ts` でZodスキーマを作成
2. **フォームコンポーネント**: `useAppForm` フックを使用してフォーム実装
3. **フィールド設定**: 型安全なフィールドコンポーネントを組み合わせ
4. **バリデーション**: リアルタイムバリデーションで UX を向上


## 環境設定

- **Node.js**: 18以上推奨
- **パッケージマネージャー**: pnpm使用
- **TypeScript**: 厳格モード有効
- **パスエイリアス**: `~/*` で `src/*` にアクセス可能