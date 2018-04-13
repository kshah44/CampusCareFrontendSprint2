import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  signinsuccess:boolean = false;
  accountexists:boolean = false;
  constructor(private httpClient:HttpClient,private router:Router) { }

  username:string = '';
  password:string;
  id:number;
  formValid:boolean = false;

  ngOnInit() {
    if(sessionStorage.getItem("signinsuccess")=="true"){
      this.signinsuccess = true;
    }else{
      this.signinsuccess = false;
    }
    if(sessionStorage.getItem("accountexists")=="true"){
      this.accountexists = true;
    }else{
      this.accountexists = false;
    }
    
    sessionStorage.clear();
  }


  login(username,password){
    
    this.username=username;
    this.password = password;
    console.log(username,password);
    this.httpClient.post(`http://localhost:8080/loginprovider`,{
      userName: this.username,
      password: this.password      
    })
    .subscribe(
      (data:any) => {
        console.log(data.userName);
      
        if(data.userName != null){
          sessionStorage.setItem("provider",JSON.stringify(data));
          this.router.navigate(['./providerhome'])
        }
        else{
          this.formValid = true;
          console.log("null object recieved")
          sessionStorage.setItem("error","true")
          this.router.navigate(['./loginprovider'])
        }
      }

    )

    

    //this.router.navigate(['./signupconsumer'])
    

  }

}
