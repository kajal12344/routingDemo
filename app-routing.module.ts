import { LoginComponent } from './login/login.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path : 'login', component : LoginComponent},
  // {path: '', redirectTo:'/login', pathMatch : 'full'},
   // {path : '', redirectTo:'/department', pathMatch : 'full'},
  {path : 'department', component : DepartmentListComponent},
  {
   path : 'department/:id',
   component : DepartmentDetailsComponent,
   children: [
     { path:'overview' , component: DepartmentOverviewComponent},
     { path:'contact' , component: DepartmentContactComponent}
   ]
  },
  {path : 'employee', component : EmployeeListComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = ["LoginComponent",
                                 "DepartmentListComponent",
                                 "EmployeeListComponent",
                                 "PageNotFoundComponent",
                                 "DepartmentDetailsComponent",
                                 "DepartmentContactComponent",
                                 "DepartmentOverviewComponent"
                                ];
