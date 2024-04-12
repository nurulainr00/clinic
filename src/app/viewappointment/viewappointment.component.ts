import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllappointment();


  }

  //get delete id
  deleteId(appointment_no:any){
    console.log(appointment_no,'deleteid==>');
    this.service.deleteappointment(appointment_no).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete appointment successful!";
      this.getAllappointment();

    });

  }

  //get appointment
  getAllappointment(){

    this.service.getAllappointment().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}