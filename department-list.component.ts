import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <h1>Department List</h1>
    <ul class="items">
       <li (click)="onSelect(dept)" [class.selected] = "isSelected(dept)" *ngFor="let dept of _department">
        <p> <button>{{dept.id}}  {{dept.name}} </button> </p>
       </li>
    </ul>
    <style>
      .selected {
        color: red;
      }
    </style>

  `,
  styles: [],

})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
     let id = parseInt(params.get('id'));
     this.selectedId = id;
    });
  }

  _department =[
    {"id":1, "name":"HR"},
    {"id":2, "name":"Resource"},
    {"id":3, "name":"Development"}
  ];
  onSelect(department)
  {
    this.router.navigate(['/department',department.id]);
  }

  isSelected(department)
  {
     return department.id === this.selectedId;
  }
}
