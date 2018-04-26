import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-provider-requests',
  templateUrl: './provider-requests.component.html',
  styleUrls: ['./provider-requests.component.css']
})
export class ProviderRequestsComponent implements OnInit {

  requests:any;
  pendingRequest:any;
  approvedRequest:any;
  completedRequest:any;

  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {

    this.httpClient.post(`http://localhost:8080/providerrequests`,{
      providerId: "1"

    })
    .subscribe(
      (data:any) => {

        this.requests = data;
        this.pendingRequest = this.requests.filter(request => request.status === "pending");
        this.approvedRequest = this.requests.filter(request => request.status === "approved");
        this.completedRequest = this.requests.filter(request => request.status === "completed");

        console.log(this.pendingRequest);
      }
      

    )

    
  }

  

  }


