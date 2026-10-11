💰 FinanzApp — Personal Finance Manager (Offline-First)
FinanzApp is an interactive web application designed for comprehensive personal finance management, budgeting, bill tracking, and credit card limit control. Built with an Offline-First architecture, it allows users to manage their personal finances seamlessly and privately without needing prior registration.

🌟 Key Features
💵 Real-Time Cash & Balance Tracking: Automatic calculation of available cash in Uruguayan Pesos (UYU) by adding registered income and subtracting executed cash expenses.

💳 Credit Card & Installment Purchase Management:

Dynamic validation checks to ensure total purchase costs do not exceed available credit card limits.

Automatic generation and scheduling of monthly installment bills in the commitments schedule.

Progressive restoration of available credit limits as monthly installments are paid off.

🔀 Multi-Currency & Dynamic Conversion (USD / UYU): Support for bill tracking in USD with real-time conversion based on a custom exchange rate setting.

🔔 Due Date Alerts & History: Visual status indicators and notification alerts for upcoming or overdue bills.

🌐 Internationalization (i18n): Full instant bilingual support for Spanish and English (es / en).

🎨 Full UI Customization:

Dark Mode and Light Mode toggling.

Customizable accent colors (Amber, Emerald, Blue, Violet).

🔒 Offline-First Architecture: Complete data persistence using Browser LocalStorage for instant access and 100% data privacy.

🛠️ Tech Stack
Frontend: React.js, JavaScript (ES6+)

Styling & UI: Tailwind CSS, Lucide React (icons)

Storage: Browser LocalStorage API

Hosting: Vercel / Netlify

🏛️ Architecture & Technical Decisions
Global State & Reactivity: Implementation of lazy initialization in React hooks (useState) for optimized reading of persistent data without impacting initial load speed.

Scalable Hybrid Design: Structured to operate out-of-the-box in Guest Mode (local storage), while fully prepared to connect with Supabase (PostgreSQL database & Authentication) in version 2.0.

🚀 Local Setup & Installation
Clone the repository:
git clone https://github.com/your-username/finanzapp.git
cd finanzapp

Install dependencies:
npm install

Run the development server:
npm run dev

🛣️ Roadmap (v2.0)
[ ] User authentication via Supabase Auth (Login/Register).

[ ] Automatic cloud data synchronization.

[ ] PDF / CSV export for income and expense reports.

[ ] Interactive charts for monthly expense distribution.
