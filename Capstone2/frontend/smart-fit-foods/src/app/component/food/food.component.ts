import { Component, OnInit } from '@angular/core';
import {Food} from "../../model/food/Food";
import {FoodDetail} from "../../model/food/FoodDetail";
import {FoodDetailService} from "../../services/food/food-detail.service";
import {FoodService} from "../../services/food/food.service";
import {RecipeDetailDTO} from "../../dto/RecipeDetailDTO";
import {Value} from "@angular/fire/remote-config";
import {RecipeDetailService} from "../../services/recipe/recipe-detail.service";
import {RecipeService} from "../../services/recipe/recipe.service";
import {Recipe} from "../../model/recipe/Recipe";
import {ToastrService} from "ngx-toastr";
import {UserDTO} from "../../dto/UserDTO";
import {NavigationExtras, Router} from "@angular/router";
import {TypeFoodService} from "../../services/food/type-food.service";
import {TypeFood} from "../../model/food/TypeFood";
import {ChoiceFoods} from "../../dto/ChoiceFoods";
import {of} from "rxjs";
import {ChatGPTService} from "../../services/chatGPT/chat-gpt.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  food: Food[];
  foodDetail: FoodDetail[];
  idFood = 1;
  title = 'smart-fit-foods';
  foodChooes: RecipeDetailDTO[]=[];
  recipes:Recipe[]=[];
  typeFoods:TypeFood[]=[];
  quantity:number;
  user:UserDTO;
  chooseTypeFood=1;
  choiceFood:ChoiceFoods[]=[];
  ngOnInit(): void {
    this.getAllFoodDetail();
    this.getAllFood();
    this.getAllTypeFood();
  }
  constructor(private foodDetailService: FoodDetailService, private foodService : FoodService,private recipeService: RecipeService,
              private toarsrt: ToastrService,private router: Router,private typeFoodService: TypeFoodService,private chatGPTService: ChatGPTService) {
  }
  getAllFoodDetail(){
    this.foodDetailService.getAll().subscribe(data=>{
      this.foodDetail= data;
    })
  }
  getAllFood(){
    this.foodService.getAll().subscribe(data=>{
      this.food= data;
    })
  }
  getAllTypeFood(){
    return this.typeFoodService.getAll().subscribe(data=>{
      this.typeFoods = data;
    })
  }
  getChooseFood(foodDetail: FoodDetail){
    let flag = true;
    const recipeDetail = new RecipeDetailDTO();
    recipeDetail.food_detail_id = foodDetail.id;
    recipeDetail.quantity = this.quantity;
    let choiceFoods = new ChoiceFoods();
    choiceFoods.food_detail_id = foodDetail.id;
    choiceFoods.name = foodDetail.name;
    for (let item of this.foodChooes){
      if (foodDetail.id==item.food_detail_id){
        this.toarsrt.error("Bạn không thể thêm món ăn trùng nhau","Thông báo")
        flag= false;
        break;
      }
    }
    if (flag == true){

      this.choiceFood.push(choiceFoods)
      this.foodChooes.push(recipeDetail)
      this.chatGPTService.setMessage(choiceFoods.name);
    }
  }

  getIdFood(item: Food) {
    this.idFood=item.id;
  }

  inputQuantity(value) {
    this.quantity = parseInt(value);
  }


  createMenu() {
    this.recipeService.getMenu(this.foodChooes).subscribe(data=>{
      console.log(this.foodChooes);
      this.recipes = data;
      this.router.navigate(['/list'], { state: { data: data } });

    })
  }
  clearFoodChoose() {
    this.foodChooes.length=0;
    this.recipes.length=0;
  }
  deleteFoodChoice(i: number) {
    this.choiceFood.splice(i,1);
    this.foodChooes.splice(i,1);
  }

}
