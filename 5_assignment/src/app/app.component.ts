
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values: number[] = [];
  title = '5_assignment';

  getvalue($event:number){
    this.values.push($event); 
    console.log(this.values)
  }
}

