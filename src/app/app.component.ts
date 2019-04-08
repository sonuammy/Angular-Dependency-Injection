import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title: string;
  
  deptObj: any[];
  constructor(private _myservice:MyserviceService) {
    this.title = 'Dependency Injection Example';
  }

  ngOnInit() {
    this.deptObj=this._myservice.dept;
  }
}
