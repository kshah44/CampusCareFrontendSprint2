import { Component, OnInit } from '@angular/core';
// import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-consumer',
  templateUrl: './signup-consumer.component.html',
  styleUrls: ['./signup-consumer.component.css']
})
export class SignupConsumerComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router) { }

  createAccount(frm){

    console.log(frm.value);
    this.httpClient.post(`http://localhost:8080/createconsumer`,frm.value)
    .subscribe(
      (data:any) => {

        console.log(data);

        if(data.userName != null){
          sessionStorage.setItem("signinsuccess","true");
          this.router.navigate(['./loginconsumer'])
        }
        else{
          sessionStorage.setItem("accountexists","true");
          this.router.navigate(['./loginconsumer'])
        }
      }
        

    )
  }

  ngOnInit() {
  }

}
