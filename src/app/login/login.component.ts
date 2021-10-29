import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private fb: FormBuilder, private route:Router) { }
  forms = this.fb.group({email: ['',[Validators.email, Validators.required]], 
  pass: ['',[Validators.pattern("^[A-Z]{1}[a-z]{6}[0-9]{2}#{1}$"), Validators.required]]})
  submitted=false;
  validDetails='';
  invalidDetails='';
  emailLog:any;
  passLog:any;
  m:any;
  n:any;
  logEmail:any;
  logPass:any;
  


  get pass(){
    return this.forms.get("pass")
  }
  get email(){
    return this.forms.get("email")
  }
  ngOnInit(): void {
    if(localStorage.getItem("SignIn Details")){
      this.m = localStorage.getItem("SignIn Details")
      this.n = JSON.parse(this.m)

      for(let i=0; i<this.n.length; i++){
        this.logEmail = this.n[i].emailadd
        this.logPass = this.n[i].password
      }
    }
  }
  
  submitDetails(){
    this.submitted=true
    this.validDetails=''
    this.invalidDetails=''
    
    if(this.emailLog==this.logEmail && this.passLog==this.logPass){
      setTimeout(() => {       
        this.validDetails = 'Successful Login';
        setTimeout(() => {
          this.submitted=false;
          this.route.navigate(['/home'])
        }, 2000);
      }, 6000);
    }
    else{
      setTimeout(() => {
        this.invalidDetails = 'Invalid Login Details'
        this.submitted=false;
      }, 6000);
    }
  }
}
