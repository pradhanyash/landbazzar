import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardArray:any[] = [
    {id:"1", heading:"CARD 1", text:"Card 1 text data Card 1 text data Card 1 text data Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:"2", heading:"CARD 2", text:"Card 2 text data Card 2 text data Card 2 text dataLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:"3", heading:"CARD 3", text:"Card 3 text data Card 3 text data Card 3 text data Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
    {id:"4", heading:"CARD 4", text:"Card 4 text data Card 4 text data Card 4 text data Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
  ];

  cardSlideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "arrows":true,
    "infinite": true,
    prevArrow: '<button class="btn-prev card-prev card-btn" (click)="prev()"></button>',
    nextArrow: '<button class="btn-next card-nxt card-btn" (click)="next()"></button>'
  };

  cardSlideConfig1 = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows":true,
    "infinite": true,
    prevArrow: '<button class="btn-prev card-prev card-btn card-btn1" (click)="prev()"></button>',
    nextArrow: '<button class="btn-next card-nxt card-btn card-btn1" (click)="next()"></button>'
  };

  container:string = "Card 1 text data Card 1 text data Card 1 text data Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  next(){}
  prev(){}

}
