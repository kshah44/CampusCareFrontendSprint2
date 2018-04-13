import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css']
})
export class ProviderHomeComponent implements OnInit {

  firstName:string = "";
  categories:any;
  providerCategories:any;
  flag:boolean;
  provider:any;
  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    this.provider = JSON.parse(sessionStorage.getItem("provider"));
    
    console.log(this.firstName);
    if(sessionStorage.length > 0){
      this.firstName = this.provider.firstName;

    }else{
      this.router.navigate(['./loginprovider'])
    }

    this.httpClient.get(`http://localhost:8080/categories`)
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.categories = data;
      
        
      }

    )

    this.httpClient.post(`http://localhost:8080/providercategories`,{
      providerId:this.provider.providerId
    })
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.providerCategories = data;
      
        
      }

    )


    
    
  }
  checkPresence(id:any){
    //console.log(this.providerCategories)
    let x = this.providerCategories.find(x=> x.categoryId == id);
    // console.log(x);
    // console.log(typeof x == 'undefined');
    return typeof x == 'undefined';
    

  }
  removeItem(categoryId:any){
    console.log(categoryId);
    console.log(this.provider.providerId);
    
     this.httpClient.post(`http://localhost:8080/removeprovidercategory`,{
      providerId:""+this.provider.providerId,
      categoryId:""+categoryId

    })
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.providerCategories = data;
      
        
      }

    )

  }
  addItem(categoryId:any){
    this.httpClient.post(`http://localhost:8080/addprovidercategory`,{
      providerId:""+this.provider.providerId,
      categoryId:""+categoryId

    })
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.providerCategories = data;
      
        
      }

    )


  }

  


}
