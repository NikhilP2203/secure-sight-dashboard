echo "# SecureSight Dashboard

A security monitoring dashboard that displays live incident feeds and incident lists for efficient threat detection. Built with **Next.js**, **Tailwind CSS**, **Prisma**, and **PostgreSQL (Neon)**.

## 🚀 Live Demo
[🔗 SecureSight Dashboard on Vercel](https://secure-sight-dashboard.vercel.app)  
[🔗 GitHub Repository](https://github.com/NikhilP2203/secure-sight-dashboard)

## 🛠 Tech Stack
- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📂 Project Structure
\`\`\`
secure-sight/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── api/incidents/
│   │   └── page.tsx
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── IncidentPlayer.tsx
│   │   └── IncidentList.tsx
└── public/
    ├── cam1.png
    ├── cam2.png
    ├── cam3.png
    └── video-placeholder.png
\`\`\`

## ✅ Features
✔ Real-time style incident dashboard  
✔ Scrollable **incident list** showing 4 at a time  
✔ Incident player with camera thumbnails overlay  
✔ Responsive UI using **Tailwind CSS**  
✔ Data stored in **PostgreSQL (Neon)** via Prisma ORM  

## ⚙️ Environment Variables
Create a \`.env\` file:
\`\`\`env
DATABASE_URL=\"postgresql://<username>:<password>@<host>/<db>?sslmode=require\"
NEXT_PUBLIC_BASE_URL=\"http://localhost:3000\"
\`\`\`

## 🖥 Local Development
\`\`\`bash
git clone https://github.com/NikhilP2203/secure-sight-dashboard.git
cd secure-sight-dashboard
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
\`\`\`

## 🚀 Deployment
- Add `DATABASE_URL` in Vercel project settings
- Ensure `postinstall` script:
\`\`\`json
\"postinstall\": \"prisma generate\"
\`\`\`

## 🔮 Future Improvements
- Add authentication & RBAC
- Real-time updates via WebSockets
- AI-based incident classification
- Export reports as PDF

---

### 📌 Author
**Nikhil Panda**  
[LinkedIn](https://www.linkedin.com/in/nikhilpanda11/) | [GitHub](https://github.com/NikhilP2203)
" > README.md
