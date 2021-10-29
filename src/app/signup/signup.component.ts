import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  constructor(private fb:FormBuilder, private route:Router) { }
  forms = this.fb.group({email:['', [Validators.email, Validators.required]],
  pass:['', [Validators.pattern("^[A-Z]{1}[a-z]{6}[0-9]{2}#{1}$"), Validators.required]],
  name:['', [Validators.required]],
  phone:['', [Validators.required]]}
  
  );
  submitted=false;
  validDetails='';
  lastName:any;
  firstName:any;
  emailDet:any;
  phoneDet:any;
  passDet:any
  a:any;
  b:any;
  wholeDetails:any;
  details:any;
  
  get email(){
    return this.forms.get('email')
  }
  get pass(){
    return this.forms.get('pass')
  }
  get name(){
    return this.forms.get('name')
  }
  get phone(){
    return this.forms.get('phone')
  }
  ngOnInit(): void {
    if(localStorage.getItem('SignIn Details')){
      this.a = localStorage.getItem('SignIn Details')
      this.wholeDetails= JSON.parse(this.a)
      // console.log(this.wholeDetails);
    }
    else{
      this.wholeDetails=[];
      localStorage.setItem('SignIn Details', JSON.stringify(this.wholeDetails))
    }
  }
  
  submitDetails(){
    this.submitted=true;
    this.validDetails=""
    this.details = {fN:this.firstName, lN:this.lastName,
      emailadd:this.emailDet, phoneNum:this.phoneDet, password:this.passDet, id:""}
    
    if(this.name && this.pass && this.email && this.phone
      ){
        setTimeout(()=>{
          this.validDetails = "Successful Registration !!!"
          setTimeout(() => {
            this.submitted=false;
            this.route.navigate(['/login'])
          }, 2000);
        }, 5000)
        
        this.wholeDetails.push(this.details)
        localStorage.setItem('SignIn Details', JSON.stringify(this.wholeDetails))
    }
  } 
}
