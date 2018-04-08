import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-provider-home',
  templateUrl: './provider-home.component.html',
  styleUrls: ['./provider-home.component.css']
})
export class ProviderHomeComponent implements OnInit {

  firstName:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
    let provider = JSON.parse(sessionStorage.getItem("provider"));
    
    console.log(this.firstName);
    if(sessionStorage.length > 0){
      this.firstName = provider.firstName;

    }else{
      this.router.navigate(['./loginprovider'])
    }
    
  }


}
