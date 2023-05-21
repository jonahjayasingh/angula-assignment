import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  invalue: number = 0;
  ref : any;
  @Output("num") value = new EventEmitter<number>();

  gamestart(){
    this.ref = setInterval(() => {
      this.value.emit(this.invalue += 1);
      
    },1000)
  }

  outvalue(){
    
  }


  stopgame(){
    clearInterval(this.ref);
    // this.invalue = 0;  
  }
  ngOnChanges(){
    console.log("change")
  }

}


