import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-provider',
  templateUrl: './signup-provider.component.html',
  styleUrls: ['./signup-provider.component.css']
})
export class SignupProviderComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router) { }

  createAccount(frm){

    console.log(frm);
    this.httpClient.post(`http://localhost:8080/createprovider`,frm.value)
    .subscribe(
      (data:any) => {

        if(data.userName != "null"){
          this.router.navigate(['./loginprovider'])
        }
        else{
          this.router.navigate(['./signupprovider'])
        }
      }
        

    )
  }

  ngOnInit() {
  }

}
