import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-provider-profile-consumerview',
  templateUrl: './provider-profile-consumerview.component.html',
  styleUrls: ['./provider-profile-consumerview.component.css']
})
export class ProviderProfileConsumerviewComponent implements OnInit {

  providerId:string;
  provider:any;
  consumerId:any;
  categoryId:any;

  constructor(private route:ActivatedRoute, private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
    let consumer = JSON.parse(sessionStorage.getItem("consumer"));
    this.categoryId = sessionStorage.getItem("tempCategoryId");

    console.log(this.categoryId);
   // console.log(this.providerId);
    console.log(consumer.consumerId);

    
    // console.log(consumer);
    if(consumer != null){
      this.consumerId = consumer.consumerId;

    }else{
      this.router.navigate(['./loginconsumer'])
    }

    this.providerId = this.route.snapshot.paramMap.get('id');
    console.log(this.providerId);
    this.httpClient.post(`http://localhost:8080/providerid`,{
      providerId: this.providerId
      

    })
    .subscribe(
      (data:any) => {

        this.provider = data;

        //console.log(data);
      }
      

    )
  }

  newRequest(){

    this.httpClient.post("http://localhost:8080/createRequest",{
      providerId: this.providerId,
      categoryId: this.categoryId,
      consumerId: this.consumerId
      

    }).subscribe(
      (data:any) => {

        // this.provider = data;

        

        console.log(data);
      }
      

    )
    this.router.navigate(['./consumerrequests'])



  }
}
