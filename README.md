# noted-sharing-app
What is this project?

This project is a web application where:

Students and professors can upload study notes.

Other users can search and download those notes.

The system controls access using login + user roles.

All notes are stored digitally and organized by subject, branch, and year.

It removes the need for physical sharing of notes and provides a central academic resource platform.

🔹 High-Level Working

User → Website (Frontend) → Backend API → Database + Cloud Storage

Frontend = React
Backend = Node + Express
Database = MongoDB
Files = Cloudinary
Auth = JWT

🔹 Step-by-Step Technical Flow
1️⃣ User Registration & Login

User registers as Student or Professor.

Backend stores user info in MongoDB.

On login:

Backend verifies email & password.

Backend generates JWT token.

Token is sent to frontend.

Frontend stores token and sends it with every request.

2️⃣ Uploading Notes

User selects a file (PDF/DOCX/JPG) and fills:

subject

branch

year

title

Frontend sends file + data to backend.

Backend:

uploads file to Cloudinary

gets file URL

saves note info in MongoDB:

file URL

uploadedBy

subject, branch, year

role (student/professor)

3️⃣ Viewing Notes

Frontend calls:

GET /notes


Backend:

fetches notes from MongoDB

sends list to frontend

Frontend:

shows notes as cards or table

displays:

title

uploader

badge (official if professor)

download button

4️⃣ Searching & Filtering

User selects:

subject

branch

year

Frontend sends query:

GET /notes?subject=Math&year=2


Backend:

filters data in MongoDB

returns only matching notes

5️⃣ Downloading Notes

User clicks download.

Frontend opens Cloudinary file URL.

File downloads directly from cloud.

6️⃣ Ownership Rule (Edit/Delete)

User clicks delete.

Frontend sends:

DELETE /notes/:id


Backend:

checks JWT token

compares:
uploadedBy == currentUserId

If match → delete allowed
If not → reject

7️⃣ Professor Verification

Professor registers.

Admin verifies professor.

Verified professor:

can mark notes as “Official”

official notes appear higher in search

8️⃣ Like, Rating, Comment

User clicks like.

Backend updates:

likes++

Comment:

stored in MongoDB under note ID

Rating:

average calculated from user ratings

🔹 Data Storage Logic
User Collection
id
name
email
password
role (student/professor/admin)
isVerified

Notes Collection
id
title
subject
branch
year
fileURL
uploadedBy
likes
rating
isOfficial

🔹 Security Flow

All private APIs require JWT token.

Backend checks:

user role

ownership

verification status

Unauthorized request → rejected.

🔹 System Diagram (in words)

User
⬇
React UI
⬇
Express API
⬇
MongoDB (metadata)
⬇
Cloudinary (files)

🔹 Final Summary (simple language)

This project is a secure academic notes sharing system.
Users log in, upload notes, and download notes.
Files are stored in cloud storage.
Data is stored in database.
Access is controlled using JWT and roles.
Only owners can edit/delete their notes.
Professors can upload official notes.
Users can search and filter notes.
