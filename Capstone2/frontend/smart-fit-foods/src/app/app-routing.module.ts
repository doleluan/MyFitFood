import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {FoodComponent} from "./component/food/food.component";
import {HomeComponent} from "./component/home/home.component";
import {HealthComponent} from "./component/health/health.component";
import {LifeComponent} from "./component/life/life.component";
import {RegistorComponent} from "./component/registor/registor.component";
import {BlogComponent} from "./component/blog/blog.component";
import {RecipeComponent} from "./component/recipe/recipe.component";
import {ListRecipeComponent} from "./component/list-recipe/list-recipe.component";


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path: "food",component:FoodComponent
  },
  {
    path: "health",
    component: HealthComponent
  },
  {
    path: "life",
    component: LifeComponent
  },
  {
    path:"registor",
    component: RegistorComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"recipes",
    component:RecipeComponent
  },
  {
    path: "list",
    component: ListRecipeComponent
  },
  {
    path: "list/:recipes",
    component: ListRecipeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
