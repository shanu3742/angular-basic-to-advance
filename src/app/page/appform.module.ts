import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './form-one/form-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [FormOneComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [FormOneComponent,PageNotFoundComponent]

})
export class AppformModule { }
