import {RecipeDetailDTO} from "./RecipeDetailDTO";

export class RecipeDTO {
  food_detail?: RecipeDetailDTO[]
  name?:string
  content?:string
  videos?:string
  imgs?:string
  rate?:number
}
