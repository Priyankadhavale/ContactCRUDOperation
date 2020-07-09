import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './Components/contact-list/contact-list.component';
import { ContactCreateComponent } from './Components/contact-create/contact-create.component';
import { ContactShowComponent } from './Components/contact-show/contact-show.component';
import { ContactEditComponent } from './Components/contact-edit/contact-edit.component';
import { ContactApiService } from './Service/ContactApi.service';
import { HttpClientModule } from '@angular/common/http';
import { Data } from './Provider/Data';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactShowComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContactApiService,Data],
  bootstrap: [AppComponent]
})
export class AppModule { }
