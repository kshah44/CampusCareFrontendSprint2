import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { SignupConsumerComponent } from './signup-consumer/signup-consumer.component';

import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { SignupProviderComponent } from './signup-provider/signup-provider.component';
import { ConsumerHomepageComponent } from './consumer-homepage/consumer-homepage.component';
import { SignupOptionsComponent } from './signup-options/signup-options.component';
import { TestProviderComponent } from './test-provider/test-provider.component';
import { TemplateComponent } from './template/template.component';

const appRoutes:Routes = [
  {path:'loginconsumer', component:LoginformComponent},
  {path:'loginprovider', component:LoginProviderComponent},
  {path:'', redirectTo:'/loginconsumer',pathMatch:'full'},
  {path:'signupconsumer', component:SignupConsumerComponent},
  {path:'signupprovider', component:SignupProviderComponent},
  {path:'consumerhome', component:ConsumerHomepageComponent},
  {path:'providerhome', component:ProviderHomeComponent},
  {path:'signupoptions', component:SignupOptionsComponent},
  {path:'testprovider', component:TestProviderComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    LoginProviderComponent,
    SignupConsumerComponent,
    ProviderHomeComponent,
    SignupProviderComponent,
    ConsumerHomepageComponent,
    SignupOptionsComponent,
    TestProviderComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
