# Student Management Application

This is an Angular-based Student Management Application built using standalone components, reactive forms, and simple routing. The application allows users to view all students and add new students dynamically.

---

## Features

### 1. Home Page – Display All Students
The home page lists all students with the following details:
- Name  
- Class  
- Gender  
- Hobby (or "No hobby")  
- Favourite Subject  

Two student records are preloaded.

---

### 2. Add Student Page
A reactive form is used to capture student details.

#### Form Fields
| Field | Type | Validation |
|-------|------|------------|
| Name | Text | Required, Minimum length 5 | 
| Class | Dropdown (6, 7, 8, 9) | Required |
| Gender | Radio | Required | 
| Has Hobby | Checkbox | Default: No |
| Hobby | Text | Visible only when Has Hobby is checked | 
| Favourite Subject | Dropdown | Optional | 

#### Dynamic UI Behavior (using *ngIf)
- When Class = 9 → "You will appear in board exams soon. All the Best !!"
- When Class = 6 → "Welcome to middle school!"
- When Class is selected (other than 6 or 9) → "Education and hobby go hand in hand!"
- When "Has Hobby" is checked → Hobby input field becomes visible

---

### 3. Add Students to the List
When the user clicks Save:
- The student is added to the main student list
- The user is redirected back to the home page
- The home page displays the updated student list

---

### 4. Navigation Menu
A simple left-side navigation menu contains:
- Home
- Add Student

Routing is handled using Angular's provideRouter and standalone routes.

---

## Project Structure

```
src/
└── app/
├── app.ts
├── app.html
├── app.css
├── app.routes.ts
├── models/
│ └── student.ts
├── services/
│ └── student-service.ts
└── components/
├── home/
│ ├── home.ts
│ └── home.html
└── add-student/
├── add-student.ts
└── add-student.html
```

---

## Technologies Used
- Angular (Standalone Components)
- TypeScript
- Reactive Forms
- Angular Routing
- Basic CSS Styling


