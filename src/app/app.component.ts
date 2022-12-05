import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'testangular';
  // myname: string = "Ajay";
  // isDisable: boolean = false;
  // firstName: string = ' '

  // confirm() {
  //   console.log(this.firstName)
  //   this.myname = this.firstName
  // }
  // showButton = true
  // names: any[] = [
  //   { firstname: "Pharon", nickname: "Ajay" },
  //   { firstname: "Ramaphume", nickname: "Penguin" },
  // ]
  // ngOnInit(){
  //   console.log(this.myname)
  // }
  constructor(private service:ApiserviceService){}

  
}
