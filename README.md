[# 🏆 CreaWin - Client Side

**CreaWin** is a modern, fully responsive contest management platform frontend built with **React**, designed to let users browse, participate in, and manage creative contests. The platform supports three roles—**Admin, Contest Creator, and Normal User**—with role-based dashboards, secure authentication, and seamless user experience.

---

## 🌐 Live Demo

[Visit CreaWin Live](https://creawin.parvejhusentalukder.com)

---

## 📦 Features

1. **Responsive Home Page**  
   - Beautiful banner with search by contest type.  
   - Popular contests section sorted by highest participation.  
   - Recent winners showcased to inspire users.  
   - Extra static section with promotional content.  

2. **All Contests Page**  
   - Tabbed view by contest type (Design, Writing, Gaming, etc.).  
   - Card-style layout for contests with details button.  

3. **Contest Details Page (Private)**  
   - Accessible only to logged-in users.  
   - Shows contest info: name, banner, participants, deadline countdown, prize, and task instructions.  
   - Register/Pay for contest via integrated payment system.  
   - Submit task feature with modal input for links/files.  

4. **Role-Based Dashboards**  
   - **Normal User:** My Participated Contests, My Winning Contests, Profile with win percentage chart.  
   - **Contest Creator:** Add new contests, manage created contests, view submissions, declare winners.  
   - **Admin:** Approve/reject contests, manage users, change roles.  

5. **Authentication & Security**  
   - JWT-based authentication for all private routes.  
   - Google Sign-In and email/password login options.  
   - Persistent login even after page refresh.  

6. **Payment Integration**  
   - Secure contest registration via payment.  
   - Participants count automatically updates after successful payment.  

7. **Forms & Validation**  
   - All forms use **react-hook-form** with validation.  
   - SweetAlert/Toast notifications for all CRUD actions.  

8. **Leaderboard Page**  
   - Dynamic leaderboard ranking users by contest wins.  

9. **Theme Toggle**  
   - Dark/Light mode toggle with saved preference in localStorage.  

10. **Extra Features**  
    - Pagination for tables (10 items per page).  
    - Two additional meaningful pages added for user engagement.  
    - Fully responsive design for mobile, tablet, and desktop.  

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, React Hook Form, TanStack Query  
- **UI Components:** Shadcn UI / MUI / DaisyUI (choose based on implementation)  
- **Authentication:** JWT, Google Sign-In  
- **State Management:** React Context / TanStack Query  
- **Forms & Validation:** React Hook Form  
- **Notifications:** SweetAlert2 / Toast  
- **Date & Time:** react-datepicker  
- **Charts:** Chart.js / Recharts for statistics  
- **HTTP Requests:** Axios  

---](https://github.com/parvejtalukder/CreaWinClient.git)