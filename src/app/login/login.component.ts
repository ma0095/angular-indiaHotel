import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms'
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

loginform=new FormGroup({
  "username":new FormControl(),
  "password":new FormControl()

})
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  authenticate(){
    console.log(this.loginform.value);
    let data=this.loginform.value
    // this.service.getTocken(data).then(res=>res.json()).then(t=>console.log(t))
    this.service.getTocken(data).then(res=>res.json()).then(t=>{
      localStorage.setItem("token",t.token)          // t.token   t=> ithine ullil varunnathukonddanu t.token koduthirikkunnathu

    });
    if ("token"in localStorage){
      this.router.navigate(['dishes'])

    }

    
    
    

  }

}
