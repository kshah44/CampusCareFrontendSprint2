import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-consumer-homepage',
  templateUrl: './consumer-homepage.component.html',
  styleUrls: ['./consumer-homepage.component.css']
})
export class ConsumerHomepageComponent implements OnInit {
  firstName:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
    let consumer = JSON.parse(sessionStorage.getItem("consumer"));
    
    console.log(this.firstName);
    if(sessionStorage.length > 0){
      this.firstName = consumer.firstName;

    }else{
      this.router.navigate(['./loginconsumer'])
    }
    
  }

}
