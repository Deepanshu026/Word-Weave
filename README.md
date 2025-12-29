📝 Blog Application – React + Appwrite

A modern full-stack blog application built using React, Appwrite, and Tailwind CSS.
The app supports authentication, blog post creation, image uploads, and role-based actions, and is deployed on Vercel with CI/CD via GitHub.

🌐 Live Demo

🔗 Deployed on Vercel:
https://word-weave-eight.vercel.app/

🛠 Tech Stack
Frontend

React (Vite)

React Router DOM

Redux Toolkit

Tailwind CSS


Backend (BaaS)

Appwrite

Authentication

Database

Storage (image upload & preview)

Deployment

Vercel (Frontend)

GitHub (Version Control)

✨ Features

User authentication (Sign up / Login)

Create, edit, and delete blog posts

Featured image upload using Appwrite Storage


Author-only edit and delete permissions

Clean and responsive UI using Tailwind CSS

Automatic redeployment on GitHub push



⚙️ Environment Variables

Create a .env file in the project root:

VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id


Make sure these variables are also added in the Vercel dashboard.

🚀 Getting Started (Local Setup)
1️⃣ Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


The app will run at:

http://localhost:5173

🔄 Deployment Workflow

Repository is connected to Vercel

Any push to the main branch:

Triggers a new build

Automatically deploys the latest version

🧠 Key Learnings

Using Appwrite as a Backend-as-a-Service

Handling media content safely in frontend apps

Structuring scalable React applications

Managing authentication and permissions

Real-world CI/CD workflow with Vercel

🚧 Future Enhancements

Search and filter posts

Comment system

Like / bookmark feature

Dark mode

Content sanitization & security improvements


