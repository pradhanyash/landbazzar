import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  open:boolean = true;
  logoSrc:string = "assets/images/logo1.png";
  title:string = "Land Bazaar";
  subTitle:string = "A new way of buying";

  @Output() toggleMenu = new EventEmitter<boolean>();
  
  data:boolean = true;

  toggle(){
    // this.data = !this.data;
    // console.log("headerComponent "+ this.data);
    this.toggleMenu.emit(this.data);
  }

}
