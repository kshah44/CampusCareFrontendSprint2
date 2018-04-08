import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  
  constructor(private httpClient:HttpClient,private router:Router) { }

  username:string = '';
  password:string;
  id:number;
  formValid:boolean = false;

  ngOnInit() {
    sessionStorage.clear();
  }


  login(username,password){
    
    this.username=username;
    this.password = password;
    console.log(username,password);
    this.httpClient.post(`http://localhost:8080/loginprovider`,{
      userName: this.username,
      password: this.password,
      

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
