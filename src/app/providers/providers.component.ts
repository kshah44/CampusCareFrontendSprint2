import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  categoryId:string;
  providers:any;

  constructor(private route:ActivatedRoute, private httpClient:HttpClient) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    sessionStorage.setItem("tempCategoryId",this.categoryId);
    console.log(this.categoryId);
    this.httpClient.post(`http://localhost:8080/getproviderbycategory`,{
      categoryId: this.categoryId
      

    })
    .subscribe(
      (data:any) => {

        this.providers = data;

        console.log(data);
      }
      

    )
  }


}
