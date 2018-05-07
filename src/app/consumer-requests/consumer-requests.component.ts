import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-consumer-requests',
  templateUrl: './consumer-requests.component.html',
  styleUrls: ['./consumer-requests.component.css']
})
export class ConsumerRequestsComponent implements OnInit {

  consumerId:any;
  consumerRequests:any;
  cancelledRequests:any;
  approvedRequests:any;
  pendingRequests:any;
  completedRequests:any;


  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    let consumer = JSON.parse(sessionStorage.getItem("consumer"));

    if(consumer != null){
      this.consumerId = consumer.consumerId;

    }else{
      this.router.navigate(['./loginconsumer'])
    }

    this.httpClient.post(`http://localhost:8080/consumerrequests`,{
      consumerId: this.consumerId
      

    })
    .subscribe(
      (data:any) => {

        this.consumerRequests = data;
        this.cancelledRequests = this.consumerRequests.filter(request => request.status === "Rejected");
        this.approvedRequests = this.consumerRequests.filter(request => request.status === "Accepted");
        this.pendingRequests = this.consumerRequests.filter(request => request.status === "Pending");
        this.completedRequests = this.consumerRequests.filter(request=>request.status === "Completed");

        console.log(data);
      }
      

    )

  }

}
