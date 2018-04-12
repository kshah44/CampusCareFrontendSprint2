import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})



export class ProviderListComponent implements OnInit {

  data:any;
  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit() {
    this.httpClient.get(`http://localhost:8080/providername`)
    .subscribe(
      (data:any) => {

        

        console.log(data);
        this.data = data;
      
        
      }

    )
    
  }


}

