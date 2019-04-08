import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
 
  dept: any[];

  constructor() { 
    this.dept = [
      { id :1, name: "Account" },
      { id :2, name: "Admin" },
      { id :3, name: "Employee" },  
    ]
  }

  
}
