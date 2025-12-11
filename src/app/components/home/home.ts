import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  students: any[] = [];

  constructor(public studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

}
