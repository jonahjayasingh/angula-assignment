import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2-3assignment';
  display:boolean=true
  num:number= 0 ;
  numlist: number[] =[];

  change(){
    this.display=!this.display;
    this.num+= 1
    this.numlist.push(this.num)

  }
}
