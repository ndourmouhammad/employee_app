import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee_app';
}
