import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { relative } from 'node:path';

@Component({
  selector: 'app-department-details',
  template: `
   <h4> You have selected department with : {{departmentId}} </h4>
   <button (click)="previous()"> Back </button>
   <!-- <a (click)="next()"> Next </a> -->
   <p>
   <button (click)="goContact()"> Contact </button> <br><br>
   <button (click)="goOverview()"> Overview </button>
   </p>
   <router-outlet> </router-outlet>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

  previous(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/department',{id:selectedId}]);
  }
  goContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  goOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
}
