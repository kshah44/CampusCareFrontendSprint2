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

  constructor(private route:ActivatedRoute, private httpClient:HttpClient) { }

  ngOnInit() {
    this.providerId = this.route.snapshot.paramMap.get('id');
    console.log(this.providerId);
    this.httpClient.post(`http://localhost:8080/providerid`,{
      providerId: this.providerId
      

    })
    .subscribe(
      (data:any) => {

        this.provider = data;

        console.log(data);
      }
      

    )
  }
}
