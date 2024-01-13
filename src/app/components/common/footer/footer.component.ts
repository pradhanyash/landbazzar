import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comp_name:string = "India Land Bazaar";
  comp_sub_title:string = "A new way of life";

  footer_b11:string = "India Land Bazaar represents the aspiration of all Global and Local entities for the facilitation of land procurement in a transparent, confidential, and hassle-free manner. \n Our endeavor is to create a Marketplace with a unique methodology for a buyer and sellers to interact directly through our portal without any third-party interference including us and create a win-win situation for both buyers and sellers in a seamless way. \n We intend to ensure save time, stress, and money for buyers and sellers.";

  footer_b31:string = "To Connect: \n";
  footer_b32:string = "\t +91 9167090001";
  footer_b33:string = "For inquiry: \n";
  footer_b34:string = "\t enquiry@indialandbazaar.com";
  footer_b35:string = "For Channel Partner: \n";
  footer_b36:string = "\t welcome@indialandbazaar.com";
  footer_b37:string = "For Allied Services: \n";
  footer_b38:string = "\t services@indialandbazaar.com";

}
