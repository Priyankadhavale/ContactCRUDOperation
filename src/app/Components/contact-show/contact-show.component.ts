import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/Core/Contact';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactApiService } from 'src/app/Service/ContactApi.service';
import { Data } from "src/app/Provider/Data";

@Component({
    selector: 'contact-show',
    templateUrl: 'contact-show.component.html',
    styleUrls: ['contact-show.component.css']
})
export class ContactShowComponent {
    contactId:number;
    contactDetails:Contact;

    constructor( private route: ActivatedRoute,private _contactApiService: ContactApiService,private data: Data) {
      
    }
 
   ngOnInit(): void {
    this.contactDetails = this.data.storage;
   }

}
