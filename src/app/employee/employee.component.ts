import { Component } from '@angular/core';

type Departement = 'IT' | 'HR' | 'Management';
type Level = 'J' | 'M' | 'S';

interface Employee {
  _id: string;
  name: string;
  departement: Departement;
  level: Level;
}

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  employee: Employee = {
    "_id": "5e9f9a7b6d7b6d7b6d7b6d7b",
    "name": "John Doe",
    "departement": "IT",
    "level": "J"
  }

}
