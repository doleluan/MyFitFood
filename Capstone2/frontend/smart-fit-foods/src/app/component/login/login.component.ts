import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/person/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

class formGroup {
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  errorMessage: string;
  constructor(private userService: UserService,private formBuilder: FormBuilder,private router: Router) { }
  ngOnInit(): void {
    this.buidForm();
  }
  buidForm(){
    this.formGroup = this.formBuilder.group({
      username:[''],
      password:[''],
    })
  }
  login() {
      this.userService.login(this.formGroup.value).subscribe(data=>{
            localStorage.setItem('token',data.token);
            this.router.navigate([""]);
      },error => {
          this.errorMessage="Thông tin tài khoản hoặc mật khẩu không chính xác"
        }
        )
  }
}
