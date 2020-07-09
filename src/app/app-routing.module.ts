import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { ContactCreateComponent } from './Components/contact-create/contact-create.component';
import { ContactEditComponent } from './Components/contact-edit/contact-edit.component';
import { ContactShowComponent } from './Components/contact-show/contact-show.component';


const routes: Routes = [
    { path: 'add-contact', component: ContactCreateComponent },
    { path: 'contact-list', component: ContactListComponent },
    { path: 'edit-contact', component: ContactEditComponent },
    {path: 'contact-show',component: ContactShowComponent},
    {path : '', component : ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
