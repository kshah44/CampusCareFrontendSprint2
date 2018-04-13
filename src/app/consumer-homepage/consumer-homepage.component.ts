import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-consumer-homepage',
  templateUrl: './consumer-homepage.component.html',
  styleUrls: ['./consumer-homepage.component.css']
})
export class ConsumerHomepageComponent implements OnInit {
  firstName:string = "";
  categories:any;
  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
    let consumer = JSON.parse(sessionStorage.getItem("consumer"));
    
    console.log(this.firstName);
    if(sessionStorage.length > 0){
      this.firstName = consumer.firstName;

    }else{
      this.router.navigate(['./loginconsumer'])
    }
    this.httpClient.get(`http://localhost:8080/categories`)
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.categories = data;
      
        
      }

    )
    
  }

}
