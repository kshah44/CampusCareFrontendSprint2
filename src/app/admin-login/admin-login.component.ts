import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  signinsuccess:boolean = false;
  accountexists:boolean = false;
  constructor(private httpClient:HttpClient,private router:Router) { }

  username:string = '';
  password:string;

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
    this.httpClient.post(`http://localhost:8080/loginadmin`,{
      username: this.username,
      password: this.password      
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      
        if(data.username != "error"){
          sessionStorage.setItem("admin",JSON.stringify(data));
          this.router.navigate(['./adminhome'])
        }
        else{
          this.formValid = true;
          console.log("null object recieved")
          sessionStorage.setItem("error","true")
          this.router.navigate(['./loginadmin'])
        }
      }

    )

    

    //this.router.navigate(['./signupconsumer'])
    

  }

}


