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
  rejectedRequest:any;
  provider:any = null;

  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    this.provider = JSON.parse(sessionStorage.getItem("provider"));
    console.log(this.provider);
    if(this.provider == null){
      //this.firstName = this.provider.firstName;
      this.router.navigate(['./loginprovider'])

    }else{
      
    }

    this.httpClient.post(`http://localhost:8080/providerrequests`,{
      providerId: this.provider.providerId+""

    })
    .subscribe(
      (data:any) => {

        this.requests = data;
        this.pendingRequest = this.requests.filter(request => request.status === "Pending");
        this.approvedRequest = this.requests.filter(request => request.status === "Accepted");
        this.completedRequest = this.requests.filter(request => request.status === "Completed");
        this.rejectedRequest = this.requests.filter(request => request.status === "Rejected");

        console.log(this.requests);
      }
      

    )

    
  }

  rejectRequest(requestId:any){

    this.httpClient.post(`http://localhost:8080/updatestatus`,{
      providerId: this.provider.providerId+"",
      requestId: requestId+"",
      status: "Rejected"

    })
    .subscribe(
      (data:any) => {

        this.requests = data;
        this.pendingRequest = this.requests.filter(request => request.status === "Pending");
        this.approvedRequest = this.requests.filter(request => request.status === "Accepted");
        this.completedRequest = this.requests.filter(request => request.status === "Completed");
        this.rejectedRequest = this.requests.filter(request => request.status === "Rejected");

        console.log(this.requests);
      }
      

    )

  }

  approveRequest(requestId:any){

    this.httpClient.post(`http://localhost:8080/updatestatus`,{
      providerId: this.provider.providerId+"",
      requestId: requestId+"",
      status: "Accepted"

    })
    .subscribe(
      (data:any) => {

        this.requests = data;
        this.pendingRequest = this.requests.filter(request => request.status === "Pending");
        this.approvedRequest = this.requests.filter(request => request.status === "Accepted");
        this.completedRequest = this.requests.filter(request => request.status === "Completed");
        this.rejectedRequest = this.requests.filter(request => request.status === "Rejected");

        console.log(this.requests);
      }
      

    )

  }
  completeRequest(requestId:any){

    this.httpClient.post(`http://localhost:8080/updatestatus`,{
      providerId: this.provider.providerId+"",
      requestId: requestId+"",
      status: "Completed"

    })
    .subscribe(
      (data:any) => {

        this.requests = data;
        this.pendingRequest = this.requests.filter(request => request.status === "Pending");
        this.approvedRequest = this.requests.filter(request => request.status === "Accepted");
        this.completedRequest = this.requests.filter(request => request.status === "Completed");
        this.rejectedRequest = this.requests.filter(request => request.status === "Rejected");

        console.log(this.requests);
      }
      

    )

  }


  

}


