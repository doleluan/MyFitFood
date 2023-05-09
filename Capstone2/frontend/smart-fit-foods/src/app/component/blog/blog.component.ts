import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/person/User";
import {UserService} from "../../services/person/user.service";
import {Recipe} from "../../model/recipe/Recipe";
import {RecipeService} from "../../services/recipe/recipe.service";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {Post} from "../../model/post/Post";
import {PostService} from "../../services/post/post.service";
import {ToastrService} from "ngx-toastr";
import {PostDTO} from "../../dto/PostDTO";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  formGroup: FormGroup;
  user: User;
  recipes: Recipe[]=[];
  recipe: Recipe;
  post: Post[]=[];
  fileChoose: File;
  url = 'assets/js/scripts/jquery.js';
  loadAPI: any;
  constructor(private postService: PostService,private formBuilder: FormBuilder,private  userService: UserService,
              private recipeService: RecipeService,private fireStorage: AngularFireStorage,private toastrService: ToastrService) {
  }
  public loadScript() {
    const node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  ngOnInit(): void {
    this.buidForm();
    this.getRecipes();
    this.getUserCurrent();
    this.getCurentUser();
    this.getPost();
    this.loadAPI = new Promise(resolve => {
      this.loadScript();
    });
  }

  buidForm() {
    this.formGroup = this.formBuilder.group({
      description: ['', [Validators.required]],
      title: ['', [Validators.required]],
      file:['',[Validators.required]],
      recipe:['']
    })
  }
  get formArray(): FormArray {
    return this.formGroup.get('formArray') as FormArray;
  }

  addFile(event) {
    this.fileChoose = event.target.files[0];
    let idImg = document.getElementById("recipes-imgs-firebase") as HTMLImageElement;
    let reader = new  FileReader();
    reader.readAsDataURL(this.fileChoose)
    reader.onload = function() {
      idImg.src = reader.result as string;
    }
  }
  getRecipes(){
    this.recipeService.gerRecipes().subscribe(data=>{
      this.recipes = data;
    })
  }
  getUserCurrent(){
    return this.userService.getUserCurrent().subscribe(data=>{
      this.user = data;
    })
  }
  convetToPost(): PostDTO{
   let  post:PostDTO = new PostDTO();
   post.recipe = this.formGroup.value.recipe.id;
   post.title = this.formGroup.value.title;
   post.description = this.formGroup.value.description;
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0
    const year = date.getFullYear();

    const formattedDate = `${hours}:${minutes} ${day}/${month}/${year}`;
    post.time = formattedDate;
    return post;
  }
  addnewPost() {
    //tao duong dan
    let imgPath = `post/${Date.now()}${this.fileChoose.name}`;
    // Tạo reference để lưu trữ ảnh trên Firebase Storage
    const imgsRef = this.fireStorage.ref(imgPath)
    this.fireStorage.upload(imgPath, this.fileChoose).snapshotChanges().pipe(finalize(()=>{
      imgsRef.getDownloadURL().subscribe(url=>{
       let post:PostDTO = this.convetToPost();
       post.img = url;
       post.user = this.user.id;
       this.addPost(post);
      })
    })).subscribe();
  }
  getCurentUser(){
    if(localStorage.getItem('token')){
      this.userService.getUserCurrent().subscribe(data=>{
        this.user = data;
      })
    }
  }
  addPost(post: PostDTO){
    this.postService.addPost(post).subscribe(data=>{
      this.toastrService.success(`Thêm bài đăng thành công`)
    },)
  }
  getPost(){
    this.postService.getAll().subscribe(data=>{
      this.post = data;
    })
  }
}
