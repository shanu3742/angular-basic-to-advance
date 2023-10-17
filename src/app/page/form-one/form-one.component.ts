import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})
export class FormOneComponent {
    constructor(){

    }
    profileInfo = new FormGroup({
      firstName:new  FormControl(''),
      lastName:new  FormControl(''),
    })

    ngOnInit(){
      //get the value of reactive form
      console.log(this.profileInfo.value);
    }
    onSubmit(){
      console.log(this.profileInfo.value);
    }


}
