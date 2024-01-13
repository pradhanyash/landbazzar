import { Component, OnInit } from '@angular/core';
// import {SlickCarouselComponet} from 'ngx-slick-carousel';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderArray:any[] = [
    {id: '1', img:'assets/images/slider/slide1.jpg', alt:'slide1', text:'Slider 1', subtext:'subtext slide1'},
    {id: '2', img:'assets/images/slider/slide2.jpg', alt:'slide2', text:'Slider 2', subtext:'subtext slide2'},
    {id: '3', img:'assets/images/slider/slide3.jpg', alt:'slide3', text:'Slider 3', subtext:'subtext slide3'},
    {id: '4', img:'assets/images/slider/slide4.jpg', alt:'slide4', text:'Slider 4', subtext:'subtext slide4'},
    {id: '5', img:'assets/images/slider/slide5.jpg', alt:'slide5', text:'Slider 5', subtext:'subtext slide5'},
  ];

  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,
    "autoPlay":true,
    autoplaySpeed: 3000,
    speed: 1500,
    fade: true,
    "arrows":true,
    "infinite": true,
    prevArrow: '<button class="btn-prev slide-arrow slick-prev prev-arrow" (click)="prev()">prev</button>',
    nextArrow: '<button class="btn-next slide-arrow slick-next next-arrow" (click)="next()">next</button>'
  };
  // prevArrow: '<button mat-button class="slide-arrow slick-prev prev-arrow"></button>',
  // nextArrow: '<button mat-button class="slide-arrow slick-next next-arrow"></button>'
  // speed: 300,
  // "arrows": true,

  sliderText:string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  
  constructor() { }

  ngOnInit(): void {
  }

}
