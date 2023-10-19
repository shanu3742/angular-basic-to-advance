import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './page/form-one/form-one.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { FormTwoComponent } from './page/form-two/form-two.component';
import { FormThreeComponent } from './page/form-three/form-three.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/form1', pathMatch: 'full'
  },
  {
    path: 'form1', component: FormOneComponent
  },
  {
    path:'form2',component:FormTwoComponent
  },
  {
    path:'form3',component:FormThreeComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
