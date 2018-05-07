import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrls: ['./provider-profile.component.css']
})
export class ProviderProfileComponent implements OnInit {
  providerId:string;
  provider:any;

  constructor(private route:ActivatedRoute, private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    
    
    if(admin == null){
      this.router.navigate(['./loginadmin']);

    }
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
