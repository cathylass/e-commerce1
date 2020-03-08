      import { Component, OnInit } from '@angular/core';
      import { HttpClient } from '@angular/common/http';
      import { CatalogueService } from '../services/catalogue.service';

      @Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
      })
      export class ProductComponent implements OnInit {

        public product:any;
        public size:number=5;
        public currentPage:number=0;
        public totalPages:number;
        public pages:Array<number>;
        public currentKeyword:string="";

        constructor (private catService:CatalogueService) { }

        ngOnInit() {

        }

        onGetProduct(){
        this.catService.getProduct(this.currentPage,this.size)
        .subscribe(data=>{
                 this.totalPages=data["page"].totalPages;
                 this.pages=new Array<number>(this.totalPages);
                 this.product=data;
                  },err=>{
                   console.log(err);
              });
        }

         onPageProduct(i){
                  this.currentPage=i;
                  this.chercherProduct();
         }

         onChercher(form: any){
         this.currentPage=0;
         this.currentKeyword=form.keyword;
         this.chercherProduct();
         }

          chercherProduct() {
                   this.catService.getProductByKeyword(this.currentKeyword,this.currentPage,this.size)
                    .subscribe(data=>{
                             this.totalPages=data["page"].totalPages;
                             this.pages=new Array<number>(this.totalPages);
                             this.product=data;
                             },err=>{
                               console.log(err);
                          });
          }
      onDeleteProduct(p){
      let conf=confirm("Etes vous sûr?");
      if(conf)
      console.log(p);
    }
       }
