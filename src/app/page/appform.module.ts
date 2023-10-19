import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './form-one/form-one.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormTwoComponent } from './form-two/form-two.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { FormThreeComponent } from './form-three/form-three.component';



@NgModule({
  declarations: [FormOneComponent, PageNotFoundComponent, FormTwoComponent, FormThreeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [FormOneComponent,PageNotFoundComponent,FormTwoComponent,FormThreeComponent]

})
export class AppformModule { }
