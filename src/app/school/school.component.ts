import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit{
  ngOnInit(): void {
  }
  // schoolName : any[] =[{name:"Kasetsart University"}]
  schoolName: string = "KU"

  message: string = ' '

  onNotifyClicked(message:string):void{
    this.message = message
  }
}
