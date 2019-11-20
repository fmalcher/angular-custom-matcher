import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  sku$ = this.route.paramMap.pipe(map(params => params.get('sku')));

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
