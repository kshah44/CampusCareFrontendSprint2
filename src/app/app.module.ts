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
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ConsumerlistComponent } from './consumerlist/consumerlist.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ConsumerProfileComponent } from './consumer-profile/consumer-profile.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProvidersComponent } from './providers/providers.component';
import { ProviderService } from './provider.service';
import { ProviderProfileConsumerviewComponent } from './provider-profile-consumerview/provider-profile-consumerview.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProviderRequestsComponent } from './provider-requests/provider-requests.component';

const appRoutes:Routes = [
  {path:'loginconsumer', component:LoginformComponent},
  {path:'loginprovider', component:LoginProviderComponent},
  {path:'', redirectTo:'/loginconsumer',pathMatch:'full'},
  {path:'adminhome',component:AdminHomepageComponent},
  {path:'signupconsumer', component:SignupConsumerComponent},
  {path:'signupprovider', component:SignupProviderComponent},
  {path:'consumerhome', component:ConsumerHomepageComponent},
  {path:'providerhome', component:ProviderHomeComponent},
  {path:'signupoptions', component:SignupOptionsComponent},
  {path:'testprovider', component:TestProviderComponent}, 
  {path:'providerlist', component:ProviderListComponent},
  {path:'consumerprofile/:id', component:ConsumerProfileComponent},
  {path:'providerprofile/:id', component:ProviderProfileComponent},
  {path:'providers/:id', component:ProvidersComponent},
  {path:'providerconsumerview/:id', component:ProviderProfileConsumerviewComponent},
  {path:'loginadmin', component:AdminLoginComponent},
  {path:'providerrequests', component:ProviderRequestsComponent}


  

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
    TemplateComponent,
    AdminHomepageComponent,
    ConsumerlistComponent,
    ProviderListComponent,
    ConsumerProfileComponent,
    ProviderProfileComponent,
    ProvidersComponent,
    ProviderProfileConsumerviewComponent,
    AdminLoginComponent,
    ProviderRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  providers: [ProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
