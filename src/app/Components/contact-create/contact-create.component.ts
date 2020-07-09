import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/Core/Contact';
import { ContactApiService } from "src/app/Service/ContactApi.service";
import { Router } from "@angular/router";

@Component({
    selector: 'contact-create',
    templateUrl: 'contact-create.component.html',
    styleUrls: ['contact-create.component.css']
})
export class ContactCreateComponent {
  contactForm:FormGroup;

      constructor(private router:Router, private _contactApiService:ContactApiService, private fb: FormBuilder) {
        this.contactForm = this.fb.group({
          firstName: new FormControl(''),
                 lastName: new FormControl(''),
                email: new FormControl(''),
                phoneNumber: new FormControl(''),
                status: new FormControl('')
        })

       }

      createContact(contactForm){
        const contactItem: Contact = new Contact();
        const result = Object.assign(contactItem, this.contactForm.value);
        contactItem.status =true;
        this._contactApiService.createContact(contactItem).subscribe(
            data => {
              console.log("contact create completed");
              this.router.navigate(['']);
           });
      }

      
}
