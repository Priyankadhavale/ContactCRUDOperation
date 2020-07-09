import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router";
import { Contact } from "../../Core/Contact";
import { ContactApiService } from 'src/app/Service/ContactApi.service';
import { Data } from "src/app/Provider/Data";
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  contactId: number;
  errorMessage: string;

  constructor(private router:Router, private _contactApiService:ContactApiService, private data: Data) { }

  ngOnInit(): void {
    this._contactApiService.getContacts().subscribe(
      {
        next: data => {this.contacts = data; },
        error: err => this.errorMessage = err
      });
  }

  editContact(contact: Contact) {
    
    this.data.storage = contact;
    
    this.router.navigate(['edit-contact']);
  }

  showDetails(contactDetails: Contact) {
    this.data.storage = contactDetails;
    this.router.navigate(["contact-show"]);
  }

  createContact()
  {
    this.router.navigate(['add-contact']);
  }

  deleteContact(contactId: number) {
    const r = confirm('Are you sure?');
    if (r) {
      this._contactApiService.deleteContact(contactId).subscribe({
        next: data => { },
        error: err => this.errorMessage = err,
        complete: () =>  {
          this.router.navigate(['']);
          window.location.reload();
        },
      });
     
    }
  }

}
