# InternTrack 360  
**A Holistic Internship Management Information System**  

## Overview  
InternTrack 360 is designed to streamline the internship management process for universities, addressing common challenges such as real-time tracking, centralized communication, and compliance monitoring. This system provides web and mobile platforms to manage student internships efficiently, ensuring a seamless experience for students, mentors, and coordinators.  

---

## Features  

### Students  
- Submit internship details (company info, offer letter, etc.).  
- Upload fortnightly reports and receive feedback.  
- Receive notifications for report deadlines.  
- Share current location via the mobile app.  

### Internal Mentors  
- Track assigned interns' progress.  
- Review and grade student reports.  
- Communicate with students via a dashboard.  

### Internship Coordinators  
- Verify and approve internship submissions.  
- Monitor real-time progress of all interns.  
- Perform CRUD operations for students, mentors, and companies.  

### Administrators  
- Generate compliance and progress reports.  
- Manage and assign mentors to interns.  
- Centralized database for all internship-related records.  

---

## Functional Requirements  

### 1. Internship Data Submission  
Students submit the following:  
- Company Details (validated with Ministry of Corporate Affairs API).  
- External Mentor Info (Name, Contact, Email).  
- Internship Start Date, City, Stipend, Offer Letter, etc.  

### 2. Reports and Evaluations  
- Fortnightly Reports (every 15 days).  
- Assignments from Internal Mentors (every 30 days).  
- Final Industry Mentor Evaluation.  

### 3. Mobile App  
- Location tracking for interns.  
- Push notifications for reminders and updates.  

### 4. Dashboards  
- Mentor Dashboard: Grade reports and track progress.  
- Coordinator Dashboard: Approve and verify student progress.  

---

## Technology Stack  

### Frontend  
- **Web App:** React.js  
- **Mobile App:** Flutter  

### Backend  
- **Framework:** Flask / Node.js / Django  
- **Authentication:** OAuth 2.0 / JWT for role-based access  
- **APIs:**  
  - MCA API (for company verification).  
  - Google Maps API (for location tracking).  

### Database  
- PostgreSQL / MongoDB for storing structured and unstructured data.  



---

## System Design  

### ER Diagram  
Entities:  
- **Student:** Stores internship and report details.  
- **Mentor:** Tracks assigned interns and submits evaluations.  
- **Coordinator:** Verifies progress and manages internships.  
- **Company:** Validated using MCA API.  

### Workflow  
1. Students upload internship details.  
2. Mentors grade reports and provide feedback.  
3. Coordinators oversee progress and approve submissions.  
4. Admins generate compliance reports for the university.  

---

## Installation and Setup  

### Prerequisites  
- Docker installed on your system.  
- Node.js and Python environments (if running locally).  
- PostgreSQL or MongoDB setup.  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/mayanksahu17/VOID-HACKS.git  
   cd interntrack-360  
