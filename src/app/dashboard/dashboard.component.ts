import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
  // forms=this.fb.group({selected: ["", [Validators.required]]});
  // get selected(){
  //   return this.forms.get('selected')
  // }
  details:any=[{display:true, disk:true}]
  transactionDetails:any;
  showTable= false;
  ether:any;
  free:any;
  bit:any;
  v:any;
  default=true;
  Coins:any =""
  statusCoin:any= 'select';
  change:any;
  amt:any;
  newDetails:any;
  tranNum:any;
  convert:any=""
  max:any = "2000000"
  min:any = "1000000"
  date:any;
  c:any;
  ngOnInit(): void {    
    if(localStorage.getItem("transaction")){
      this.v=localStorage.getItem("transaction")
      this.transactionDetails=JSON.parse(this.v)
      console.log(this.transactionDetails);      
    }
    else{
      this.transactionDetails=[];
      localStorage.setItem('transaction', JSON.stringify(this.transactionDetails))
    }
    if (this.transactionDetails=="") {
      this.showTable=false
    }
    else if (this.transactionDetails!="") {
      this.showTable=true;
    }
  }
  conCurrency(){
    console.log(this);
    
    let a = 300000
    let val = this.amt/a;
    this.convert= new Intl.NumberFormat('en-US',{
      style:'currency',
      currency: this.statusCoin
    }).format(val)
    console.log(this.convert);
    
    this.default == false ? this.details.disk=true : this.details.disk=false
  }

  
  coinTran(){
    this.showTable= true;
    let a = Math.floor(Math.random() * (this.max - this.min + 1)+ this.min);
    this.tranNum = `${this.statusCoin}-${a}`
    this.date =new Date;
    this.newDetails= {tN:this.tranNum, coin:this.convert, dt:this.date, status: this.Coins}
    this.transactionDetails.push(this.newDetails)
    localStorage.setItem('transaction', JSON.stringify(this.transactionDetails))
  
  }

  buy(){
    this.Coins = "BUY"
  }

  sell(){
    this.Coins = "SELL"
  }
  changeCoin(params:any){
    console.log(this.statusCoin);
  }

}
