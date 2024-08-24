import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm: FormGroup

  constructor(
      private router: Router
  ) {
    this.contactForm = new FormGroup({
      name: new FormControl(null,  [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      question: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe(valor => {
      console.log(valor)
    })
    
  }

  sendForm() {
    console.log(this.contactForm.value)
     this.router.navigate(['products'])
  }

    checkError(field: string, error: string) {
    return this.contactForm.get(field)?.hasError(error) && this.contactForm.get(field)?.touched;
  }
}
