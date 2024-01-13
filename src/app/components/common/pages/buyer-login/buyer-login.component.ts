import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.css']
})
export class BuyerLoginComponent implements OnInit {
  // buyerLogin:FormGroup;
  visibility:boolean = false;
  eyeIcon:string = 'visibility_off';

  buyerCreds:{user: string, pass: string}[] = [
    {user:'test1@mail.com', pass: '123456'},
    {user:'test2@mail.com', pass: '123456'}
  ];

  buyerLogin = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  
  constructor(private router:Router) { }
  
  ngOnInit(): void {  }

  visibilityCheck(){
    this.eyeIcon = this.visibility ? 'visibility_off' : 'visibility';
    this.visibility = !this.visibility;
  }
  
  loginSubmit(loginData:any){
    let count = 1;
    // console.log(this.buyerCreds.find(obj => obj.user == loginData.value.username))
    let login =  this.buyerCreds.find(obj => obj.user == loginData.value.username);
    if(login != undefined){
      this.router.navigateByUrl('buyer-dashboard');
    }
    else{
      this.router.navigateByUrl('buyer-login');
    }
    // this.buyerCreds.find((obj)=>{
    //   console.log("------->");
    //   console.log(obj);
    //   console.log(loginData);
    //   console.log(typeof(obj.user));
    //   console.log("<-------");
    // })
    // this.buyerCreds.map((obj)=> {
    //   console.log(obj);
    //   console.log(count++);
    //   console.log(obj.user);
    //   console.log(typeof(obj.user));
    //   if(loginData.value.username == obj.user){
    //     this.router.navigateByUrl('buyer-dashboard');
    //   }
    //   else{
    //     this.router.navigateByUrl('buyer-login');
    //   }
    // });
  }

}
