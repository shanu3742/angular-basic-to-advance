import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneComponent } from './page/form-one/form-one.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/form1', pathMatch: 'full'
  },
  {
    path: 'form1', component: FormOneComponent
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
