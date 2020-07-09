import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient,HttpParams, HttpErrorResponse} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError,tap } from "rxjs/operators";
import { Contact } from '../Core/Contact';
import { environment } from "src/environments/environment";

@Injectable()
export class ContactApiService{
    baseUrl: string = environment.baseUrl;
    constructor(private httpClient:HttpClient) {}
    
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }

      getContacts(): Observable<Contact[]>{
        return this.httpClient.get<Contact[]>(this.baseUrl).pipe(
          catchError(this.handleError)
        );
      }

      getContact(id:number):Observable<Contact>{
        return this.httpClient.get<Contact>(this.baseUrl + id);
      }

      createContact(contactDetails:Contact):Observable<Contact>{
        return this.httpClient.post<Contact>(this.baseUrl,contactDetails,this.httpOptions);
      }

      deleteContact(id:number):Observable<Contact>{
        debugger;
        return this.httpClient.delete<Contact>(this.baseUrl+'/' + id);
      }
      updateContact(contactDetails:Contact):Observable<Contact>{
        return this.httpClient.put<Contact>(this.baseUrl,contactDetails,this.httpOptions);
      }

      private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
          errorMessage = 'An error occurred: ${err.error.message}';
        }
        else
        {
          errorMessage = 'server returned the code ${err.status}, error message is : ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }

}