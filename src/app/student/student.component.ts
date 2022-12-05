import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input()
  schoolName!: string;
  
  @Output()
  studentName: EventEmitter<string> = new EventEmitter<string>();

  onClick():void{
    this.studentName.emit("Pharon")
  }

}
