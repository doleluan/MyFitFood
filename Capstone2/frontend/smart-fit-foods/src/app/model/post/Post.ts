import {User} from "../person/User";
import {Recipe} from "../recipe/Recipe";

export class Post {
  id?:number
  title?:string
  time?:string
  description?:string
  img?:string
  users?:User
  recipe: Recipe
}
