import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  employee: Employee = {
    _id: "5e9f9a7b6d7b6d7b6d7b6d7b",
    name: "Mouhammad Ndour",
    department: "IT",
    level: "J"
  };

  onNameClick(employeId: string) {
    console.log(employeId)
  }
}
