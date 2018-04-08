import { Component, OnInit } from '@angular/core';
//import RouterModule from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  

  constructor(private httpClient:HttpClient,private router:Router) { 
   
     
  }

  
  username:string = '';
  password:string;
  formValid:boolean = false;

  ngOnInit() {
    
    sessionStorage.clear();
  }


  login(username,password){
    
    this.username=username;
    this.password = password;
    console.log(username,password);
    this.httpClient.post(`http://localhost:8080/loginconsumer`,{
      userName: this.username,
      password: this.password

    })
    .subscribe(
      (data:any) => {

        

        console.log(data.userName);
      
        if(data.userName == null){
          this.formValid = true;
          console.log("null object recieved")
          sessionStorage.setItem("error","true")
          this.router.navigate(['./loginconsumer'])
        }
        else{
          sessionStorage.setItem("consumer",JSON.stringify(data));
          this.router.navigate(['./consumerhome']);
        }
      }

    )
   
    

    //this.router.navigate(['./signupconsumer'])
    

  }
  

}
