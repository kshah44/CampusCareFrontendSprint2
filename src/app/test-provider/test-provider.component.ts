import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-provider',
  templateUrl: './test-provider.component.html',
  styleUrls: ['./test-provider.component.css']
})
export class TestProviderComponent implements OnInit {
  test:any;

  constructor(private httpClient:HttpClient) {
    this.httpClient.get(`http://localhost:8080/consumername`)
    .subscribe(
      (data:any) => {
        console.log(data);
        this.test = data;

        

       
      
       
      }

    )
  }

  ngOnInit() {
    
  }

}
