import { Component, OnInit } from '@angular/core';
import{AuthService}from '../service/auth.service'

@Component({
  selector: 'app-dishlist',
  templateUrl: './dishlist.component.html',
  styleUrls: ['./dishlist.component.css']
})
export class DishlistComponent implements OnInit {
allDishes:any=[] //taking all dish detail

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.service.getAllDishes().then(res=> res.json()).then(data=>{
      this.allDishes=data
    })
  }

}
