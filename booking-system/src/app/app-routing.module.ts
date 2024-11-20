import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './reservation/form/form.component';
import { ListComponent } from './reservation/list/list.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "/new", component: FormComponent },
  { path: "/list", component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
