import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './page/form-one/form-one.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { FormTwoComponent } from './page/form-two/form-two.component';
import { FormThreeComponent } from './page/form-three/form-three.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/form', pathMatch: 'full'
  },
  {
    path: 'form', children:[
      {
        path:'',component:FormOneComponent
      },
      {
        path:'formgroupandformControl',component:FormOneComponent
      },
      {
        path:'formBuilder',component:FormTwoComponent
      },
      {
        path:'formBuildInValidation',component:FormThreeComponent
      },


    ]   
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
