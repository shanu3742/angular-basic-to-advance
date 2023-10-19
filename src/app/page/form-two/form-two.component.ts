import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.scss']
})
export class FormTwoComponent {
  feedBackForm = this.fb.group({
    name:[''],
    email:[''],
    age:[''],
    comment:[''],
    star:['']
  })
  constructor(private fb:FormBuilder){

  }
  handleSubmit(){
    console.log(this.feedBackForm.value)
    // this.feed.emit(this.feed)
    }
  
  ngOnInit(){
    console.log(this.feedBackForm.value)
  }

}
