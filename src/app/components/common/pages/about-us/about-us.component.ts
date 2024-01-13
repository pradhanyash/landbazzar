import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  txt1:string = "Land Bazaar represents the aspiration of all Global and Local entities for the facilitation of land procurement in a transparent, confidential, and hassle-free manner. \n Our endeavor is to create a Marketplace with a unique methodology for a buyer and sellers to interact directly through our portal without any third-party interference including us and create a win-win situation for both buyers and sellers in a seamless way. \n We intend to ensure save time, stress, and money for buyers and sellers.";

}
