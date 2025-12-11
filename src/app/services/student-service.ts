import { Injectable } from '@angular/core';
import { Student } from '../models/student';


@Injectable({ providedIn: 'root' })
export class StudentService {
  students: Student[] = [
    {
      name: 'Lathika',
      class: '7',
      gender: 'Female',
      hasHobby: false,
      favouriteSubject: 'Science'
    },
    {
      name: 'Viyass',
      class: '9',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Drawing',
      favouriteSubject: 'Maths'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }
  addStudent(s: Student) {
    this.students.push(s);
  }
}