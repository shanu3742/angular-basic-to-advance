import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularform';
  isOpen=false;

  constructor(private router: Router){}
  handleOpen(){
this.isOpen=true;
console.log(this.isOpen);
  } 
  handleClose(){
    this.isOpen=false;
    
  }

  onNavigate(paramsToNavigate: string){
    console.log(paramsToNavigate);
    this.router.navigate([paramsToNavigate]);

  }

  handleToggle(){
    console.log(this.isOpen);
    this.isOpen=!this.isOpen;
  }
}
