import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-three',
  templateUrl: './form-three.component.html',
  styleUrls: ['./form-three.component.scss']
})

export class FormThreeComponent {
  feedbackFormWithBuildInValidation = this.fb.group({
  name:['',[Validators.required,Validators.minLength(5)]],
  email:['',[Validators.email,Validators.required]],
  age:['',[Validators.required,Validators.min(18),Validators.max(90)]],
  comment:['',Validators.required],
  star:['',[Validators.required,Validators.min(1),Validators.max(5)]]
  })
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    // console.log(Validators.)
  }
  getEmailErrorMessage(){
    if(this.feedbackFormWithBuildInValidation.get('email')?.errors?.['required']){
      return 'Email is required*'

    }

    return 'Invalid email address'
  }

  getNameErrorMessage(){
    console.log(this.feedbackFormWithBuildInValidation.get('name')?.errors)
    if(this.feedbackFormWithBuildInValidation.get('name')?.errors?.['required']){
      return 'Name is required*'
    }
    if(this.feedbackFormWithBuildInValidation.get('name')?.errors?.['minlength']){
      // requiredLength: 5, actualLength: 1
      let error = this.feedbackFormWithBuildInValidation.get('name')?.errors?.['minlength'];
      return `Name must be more then five char Please Enter ${error.requiredLength-error.actualLength}  more Char`
    }
    return 'Invalid Name'
  }
  getAgeErrorMessage(){
    console.log(this.feedbackFormWithBuildInValidation.get('age')?.errors)
    if(this.feedbackFormWithBuildInValidation.get('age')?.errors?.['required']){
      return 'Age is required*'
    }
    if(this.feedbackFormWithBuildInValidation.get('age')?.errors?.['min'] || this.feedbackFormWithBuildInValidation.get('age')?.errors?.['max']){
      return 'Age must be between 18 and 90'
    }
    return 'Invalid Age'
  }
  getCommentErrorMessage(){
    console.log(this.feedbackFormWithBuildInValidation.get('comment')?.errors)
    if(this.feedbackFormWithBuildInValidation.get('comment')?.errors?.['required']){
      return 'comment is required*'
    }
   
    return 'Invalid comment'
  }

  getStarErrorMessage(){
    console.log(this.feedbackFormWithBuildInValidation.get('star')?.errors)
    if(this.feedbackFormWithBuildInValidation.get('star')?.errors?.['required']){
      return 'Rating is required*'
    }
    if(this.feedbackFormWithBuildInValidation.get('star')?.errors?.['min'] || this.feedbackFormWithBuildInValidation.get('star')?.errors?.['max']){
      return 'Rating must be between 1 To 5'
    }
    return 'Invalid Rating'
  }
  handleSubmit(){
    // console.log(Validators)
    console.log('form is valid',this.feedbackFormWithBuildInValidation.valid)
    console.log('form is invalid',this.feedbackFormWithBuildInValidation.invalid)
    console.log('hasEmail error',this.feedbackFormWithBuildInValidation.get('email'))
    console.log('name error',this.feedbackFormWithBuildInValidation.get('name')?.invalid)
    console.log(this.feedbackFormWithBuildInValidation.value)
    // this.feed.emit(this.feed)
    }
}
