import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-consumer-profile',
  templateUrl: './consumer-profile.component.html',
  styleUrls: ['./consumer-profile.component.css']
})
export class ConsumerProfileComponent implements OnInit {
  consumerId:string;
  consumer:any;
  constructor(private route:ActivatedRoute, private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    
    
    if(admin == null){
      this.router.navigate(['./loginadmin']);

    }
    this.consumerId = this.route.snapshot.paramMap.get('id');
    console.log(this.consumerId);
    this.httpClient.post(`http://localhost:8080/consumerId`,{
      consumerId: this.consumerId
      

    })
    .subscribe(
      (data:any) => {

        this.consumer = data;

        console.log(data);
      }
      

    )

  }
  
}
