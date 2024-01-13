import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm:any;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      first_name : new FormControl('', [Validators.required]),
      last_name : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required, Validators.email]),
      subject : new FormControl('', [Validators.required]),
      comments : new FormControl('', [Validators.required])
    });
  }

  formSubmit(formData:any){
    console.log("contactForm", formData);
  }

}
