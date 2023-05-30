import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') getData!: NgForm;
  status:boolean=false;
  data={
    email:"",
    skill:"",
    password:""
  }
  onSubmit(){
    this.status = true;
    console.log(this.getData.value.email)
    this.data.email = this.getData.value.email
    this.data.skill = this.getData.value.skill
    this.data.password = this.getData.value.password


  }
}
