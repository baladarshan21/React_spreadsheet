# `react`

React is a JavaScript library for creating user interfaces.

The `react` package contains only the functionality necessary to define React components. It is typically used together with a React renderer like `react-dom` for the web, or `react-native` for the native environments.

**Note:** by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the [production build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build) when deploying your application.

# 📋 Spreadsheet UI with React + TypeScript

A dynamic spreadsheet-style user interface built with **React**, **TypeScript**, and **Tailwind CSS**. Mimics Airtable-style layout with sortable rows, color-coded tags, and responsive design — all without third-party state managers.

---

## 🔧 Tech Stack

- **React 18** (with Vite)
- **TypeScript** (Strict Mode)
- **Tailwind CSS**
- No Redux or Zustand — local component state only
- No external grid/table libraries

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/spreadsheet-ui.git
cd spreadsheet-ui
npm install
npm run dev
