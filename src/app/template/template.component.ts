import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  data:any;
  

  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit() {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    
    
    if(admin == null){
      this.router.navigate(['./loginadmin']);

    }

    this.httpClient.get(`http://localhost:8080/consumername`)
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.data = data;
      
        
      }

    )
    
  }


}
