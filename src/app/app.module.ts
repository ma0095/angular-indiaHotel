import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ FormsModule, ReactiveFormsModule }from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { DishlistComponent } from './dishlist/dishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
