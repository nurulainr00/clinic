import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllreview();


  }

  //get delete id
  deleteId(appointment_no:any){
    console.log(appointment_no,'deleteid==>');
    this.service.deletereview(appointment_no).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete review successful!";
      this.getAllreview();

    });

  }

  //get review
  getAllreview(){

    this.service.getAllreview().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}