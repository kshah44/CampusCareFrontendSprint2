import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class ProviderService {

  providers:any;

  constructor(private httpClient:HttpClient) { }

  
}
