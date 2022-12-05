import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Imovie } from '../imovie';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss']
})
export class ShowDataComponent implements OnInit{
  constructor(private service : ApiserviceService){}

  @Output() obj: EventEmitter<any> = new EventEmitter<any>();
  
  @Input() id : string = ''
  ngOnInit(): void {
  }
  
  onClick(){
    this.service.getData(this.id).subscribe(res => {
      this.obj.emit(res)
      console.log(`id in show = ${this.id}`)
    })
  }
  ngOnChanges(){

  }
  
  // showData(){
  //   this.service.getData(this.id).subscribe(res => {
  //     console.log(res)
  //     this.obj = res
      
  //   })
  //   this.NameMovie = this.NameMovie
  //   console.log(this.NameMovie)
  // }

}
