import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../model/recipe/Recipe";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) { }
  recipes:Recipe[]=[];
  recipe: Recipe;
  ngOnInit(): void {

    this.recipes = history.state.data;
    this.recipe = history.state.data[0];
  }


  getRecipe(item: Recipe) {
      this.recipe = item;
    let idVideos = document.getElementById("videoRecipes") as HTMLVideoElement;
    idVideos.load();
  }
}
