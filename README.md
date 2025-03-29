Assignment by Growth Gear . Submitted on 29/03/2025

## Live link:- https://querydashboardgrowthgmanash.netlify.app/

# Steps to run the project 
## installation of vite+react -
- npm create vite@latest
- npm install

## Setup Tailwind -
- npm install tailwindcss @tailwindcss/vite
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Add this in vite.config.js - 
plugins: [
        tailwindcss(),
    ],
- Add this in your index.css -
    @import "tailwindcss"
- Add jsconfig.app.json -
    {
    "compilerOptions": {
      // ...
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "./src/*"
        ]
      }
      // ...
    }
  }
- Add jsconfig.json -
    {
    "files": [],
    "references": [],
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }

## Run the Project -
- npm run dev

## Used dependencies -
- react-router
- @reduxjs/toolkit
- react-redux
- recharts
- react-icons

# About Project
## Goal :-
- Users enter a query (like "Total sales in 2023?")
- The system simulates automate processing and returns mock data
- Query history is saved in Redux state
- Results are displayed in a chart

## Logic :-
- Handles query inputs, submissions & storing results in redux
- Allows users to enter queries
- Sends queries to Redux
- Simulates an array of suggestions
- Calls a mock API for results to generate random data
- Displays past queries from Redux
- Uses Recharts to visualize query results
- Uses Tailwind CSS for styling & responsive design

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
