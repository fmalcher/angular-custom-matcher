import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {

  categoryId$ = this.route.paramMap.pipe(map(params => params.get('categoryId')));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
