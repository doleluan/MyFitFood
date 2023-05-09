import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './component/food/food.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { HealthComponent } from './component/health/health.component';
import { LifeComponent } from './component/life/life.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistorComponent } from './component/registor/registor.component';
import { BlogComponent } from './component/blog/blog.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListRecipeComponent } from './component/list-recipe/list-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    LoginComponent,
    HomeComponent,
    HealthComponent,
    LifeComponent,
    RegistorComponent,
    BlogComponent,
    RecipeComponent,
    ListRecipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
