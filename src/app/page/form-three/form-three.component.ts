import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})

export class FormThreeComponent {
  feedbackFormWithBuildInValidation = this.fb.group({
  name:['',Validators.required],
  email:['',Validators.email],
  age:['',Validators.required],
  comment:['',Validators.required],
  star:['',Validators.required]
  })
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    // console.log(Validators.)
  }

  handleSubmit(){
    // console.log(Validators)
    console.log('form is valid',this.feedbackFormWithBuildInValidation.valid)
    console.log('form is invalid',this.feedbackFormWithBuildInValidation.invalid)
    console.log('get email error',this.feedbackFormWithBuildInValidation.getError('email'))
    console.log('hasEmail error',this.feedbackFormWithBuildInValidation.hasError('email'))
    console.log(this.feedbackFormWithBuildInValidation.value)
    // this.feed.emit(this.feed)
    }
}
