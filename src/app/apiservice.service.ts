import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseappointmentUrl = "http://localhost:8080/appointment"
const createappointmentUrl = "http://localhost:8080/appointment/add"
const delappointmentUrl = "http://localhost:8080/appointment/del"
const putappointmentUrl = "http://localhost:8080/appointment/put"
const basereviewUrl = "http://localhost:8080/review"
const createreviewUrl = "http://localhost:8080/review/add"
const delreviewUrl = "http://localhost:8080/review/del"
const putreviewUrl = "http://localhost:8080/review/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllappointment():Observable<any>{
  const url = "http://localhost:8080/allappointment"
  return this._http.get<any>(url)
}

 // create
 createappointment(appointment: any):Observable<any>{
  console.log(appointment,'createapi=>');
  return this._http.post(createappointmentUrl, appointment)
}

//deleting 

deleteappointment(appointment: any): Observable<any> {
  return this._http.delete(`${delappointmentUrl}/${appointment}`);

}

//update 
updateappointment(appointment: any, clinic: any): Observable<any> {
  return this._http.put(`${putappointmentUrl}/${appointment}`, clinic);

}

//get one 
getOneappointment(appointment:any):Observable<any>{
  return this._http.get(`${baseappointmentUrl}/${appointment}`);
}

// For REVIEW
//get all 
getAllreview():Observable<any>{
  const url = "http://localhost:8080/allreview"
  return this._http.get<any>(url)
}

 // create
 createreview(review: any):Observable<any>{
  console.log(review,'createapi=>');
  return this._http.post(createreviewUrl, review)
}

//deleting 

deletereview(review: any): Observable<any> {
  return this._http.delete(`${delreviewUrl}/${review}`);

}

//update 
updatereview(review: any, clinic: any): Observable<any> {
  return this._http.put(`${putreviewUrl}/${review}`, clinic);

}

//get one 
getOnereview(review:any):Observable<any>{
  return this._http.get(`${basereviewUrl}/${review}`);
}
}
