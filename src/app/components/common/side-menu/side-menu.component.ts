import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userType = "Guest";
  dateToday = new Date;
  open:boolean = true;

  receive($toggleData:any){
    console.log("open");
    console.log(this.open);
    console.log("toggleMenu");
    console.log($toggleData);
    this.open = $toggleData;
  }
}
