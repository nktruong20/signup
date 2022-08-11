import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  sliderImg:any = [];
  listProduct:any;


  constructor(private productService:ProductService,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let _id = this.actRoute.snapshot.params['id'];
    this.productService.find(_id).subscribe((data)=>{
      this.sliderImg = data.allImg;
      this.listProduct = data
      console.log(this.sliderImg)
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
