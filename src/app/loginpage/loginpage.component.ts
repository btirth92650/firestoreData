import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  public showPassword !: boolean;
  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  username:string = '';
  password:string = '';
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userid: [""],
      password: [""],
    })
  }

  // login() {
  //   console.log(this.loginForm.value.user)
  //   const user = this.loginForm.value.user
  //   const password = this.loginForm.value.password
  //   if (user === this.username && password === this.password) {
  //     alert("login is Succesful !!"),
  //       this.router.navigate(['admin'])
  //   } else {
  //     alert("invalid password or username")
  //   }
 
    // this.loginForm.reset()

  // }
  submit() {
    console.log(this.loginForm.value);

  //   const payload: Data = {
  //     id: '',
  //     data_userid: this.loginForm.value.Name,
  //     data_password: this.loginForm.value.Password
  //   }

  //   this.dataService.addData(payload).then((res)=>{
  //     if(res){
  //       alert('Data Added Succesfully')
  //     }
  //     this.loginForm.reset()
  //   })
  // }
 

}
}
