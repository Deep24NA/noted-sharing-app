<h1 align="center"> 📚 Online Notes Sharing System </h1>

---

## 📝 Project Description

The Online Notes Sharing System is a web-based application designed to allow students and professors to upload, share, search, and download academic notes in a digital format.
The platform provides a centralized place for managing study materials based on subject, branch, and academic year, making access easier and more organized.

The system uses secure authentication and role-based access control to ensure that users only perform actions allowed for their role (Student, Professor, Admin).

##  🎯 Objectives

- Provide a digital platform for sharing academic notes.

- Allow students to search and download notes easily.

- Allow professors to upload verified and official notes.

- Organize notes based on subject, branch, and year.

- Prevent unauthorized editing or deletion of notes.

- Maintain data security and integrity.

##  🌐 System Architecture

- User → Frontend (React) → Backend (Express API) → Database & Cloud Storage

- Frontend: React.js + Tailwind CSS

- Backend: Node.js + Express.js

- Database: MongoDB

- File Storage: Cloudinary

- Authentication: JWT (JSON Web Token)

##  🔁 Technical Working Flow
###  1️⃣ User Registration & Login

1. User registers as Student or Professor.

2. User data is stored in MongoDB.

3. On login, backend verifies credentials and generates a JWT token.

4. Token is stored on frontend and sent with every request for authorization.

###  2️⃣ Uploading Notes

1. User selects a file (PDF/DOCX/JPG) and enters metadata (subject, branch, year, title).

2. Frontend sends file and data to backend API.

3. Backend uploads the file to Cloudinary and receives a file URL.

4. Backend stores note information in MongoDB with:

   - file URL

   - subject, branch, year

   - uploader ID

   - role (student/professor)

###  3️⃣ Viewing Notes

1. Frontend requests notes from backend:

   - GET /notes

2. Backend fetches notes from MongoDB.

3. Frontend displays notes with title, uploader name, badge (official if professor), and download button.

###  4️⃣ Searching & Filtering

1. Users can filter notes by:

   - Subject

   - Branch

   - Academic Year

**Example API:**

   - GET /notes?subject=Math&year=2

2. Backend filters data and returns only matching notes.

###  5️⃣ Downloading Notes

1. User clicks download.

2. Frontend opens Cloudinary file URL.

3. File downloads directly from cloud storage.

###  6️⃣ Ownership Rule (Edit/Delete)

1. User sends delete or edit request:

   - DELETE /notes/:id

2. Backend checks:

   - JWT token

   - uploadedBy == currentUser

3. If matched → action allowed
   - Else → request rejected

###  7️⃣ Professor Verification

1. Professor registers.

2. Admin verifies professor account.

3. Verified professors can:

   - mark notes as “Official”

  - get higher visibility in search results

###  8️⃣ Like, Rating, Comment System

- Likes increase note popularity.

- Comments are stored under note ID.

- Ratings are averaged and displayed.

##  🗄 Data Models
###  User
 - id  
 - name  
 - email  
 - password  
 - role (student / professor / admin)  
 - isVerified
 
###  Note
 - id  
 - title  
 - subject  
 - branch  
 - year  
 - fileURL  
 - uploadedBy  
 - likes
 - rating  
 - isOfficial
    
##  🔐 Security

- JWT-based authentication

- Role-based API access

- Ownership validation

- Secure file storage

- Input validation

##  ⚙️ Features

- User registration & login

- Upload notes (PDF, DOCX, JPG)

- Download notes

- Search & filter

- Role-based access

- Professor verification

- Like, rating, and comment

- Ownership control

##  🚀 Future Enhancements

- AI-based recommendation system

- Mobile app

- Offline access

- Notification system

- Plagiarism detection

##  📌 Final Summary

This project is a secure and structured online notes sharing system where users can upload and download study materials.
The system uses cloud storage for files, database for metadata, and role-based access control to maintain security and ownership of notes.
