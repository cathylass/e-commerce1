import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

   public host:string="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  public getProduct(page:number,size:number){
    return this.httpClient.get(this.host+"/products?page="+page+"&size="+size);
  }

   public getProductByKeyword(mc:string,page:number,size:number){
       return this.httpClient.get(this.host+"/products/search/byDesignationPage?mc="+mc+"&page="+page+"&size="+size);
     }
   }


