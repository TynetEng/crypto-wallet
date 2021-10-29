import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  firstName:any;
  getLocal:any
  a:any
  b:any;
  c:any;
  d:any;
  e:any;
  pic:any;
  stopAminie = false;
  
  
  ngOnInit(): void {
    if(localStorage.getItem("SignIn Details")){
      this.a= localStorage.getItem("SignIn Details")
      this.getLocal= JSON.parse(this.a)
      for(let i=0; i<this.getLocal.length; i++){
        this.b = this.getLocal[i].fN;
        this.c = this.getLocal[i].lN
        this.firstName = this.b;
        this.pic = this.b.slice(0,1) + this.c.slice(0,1)
      }
    }
  }
  

}
