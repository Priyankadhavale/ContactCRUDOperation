import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/Core/Contact';
import { Data } from 'src/app/Provider/Data';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ContactApiService } from 'src/app/Service/ContactApi.service';
import { Router } from '@angular/router';

@Component({
    selector: 'contact-edit',
    templateUrl: 'contact-edit.component.html',
    styleUrls: ['contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
    contactDetails:Contact;
    contactEditForm: FormGroup;

    constructor(private data:Data, private fb:FormBuilder, private _contactApiService:ContactApiService,private router:Router){
        this.contactEditForm = this.fb.group({
            id: new FormControl(''),
            firstName: new FormControl(''),
                   lastName: new FormControl(''),
                  email: new FormControl(''),
                  phoneNumber: new FormControl(''),
                  status: new FormControl('')
          })

    }

    ngOnInit(){
        this.contactDetails = this.data.storage;
    }

    updateContact(contactEditForm){
        const contactItem: Contact = new Contact();

        const result = Object.assign(contactItem, this.contactEditForm.value);
        contactItem.status = true;
        debugger;
        this._contactApiService.updateContact(contactItem).subscribe(
            data => {
              console.log("contact update completed");
              this.router.navigate(['']);
           });
    
    }
}
