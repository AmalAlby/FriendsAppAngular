import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { RouterModule, Routes } from '@angular/router';

const myroute:Routes=[
  {
    path:"",
    component:AddfriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddfriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
