import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.css']
})
export class AddappointmentComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneappointment(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.patientForm.patchValue({
        patientName:res.data[0].patientName,
        patientPhone:res.data[0].patientPhone,
        patientaddress:res.data[0].patientaddress,
        appointmentdate:res.data[0].appointmentdate,

      });
    });
  }
  }

  patientForm = new FormGroup({
    'patientName':new FormControl('',Validators.required),
    'patientPhone':new FormControl('',Validators.required),
    'patientaddress':new FormControl('',Validators.required),
    'appointmentdate':new FormControl('',Validators.required)


  });

  //to create a new appointment
  clinicSubmit(){
    if(this.patientForm.valid){
      console.log(this.patientForm.value);
      this.service.createappointment( this.patientForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.patientForm.reset();
        this.successmsg = 'Add Appointment Successful';
      });

    }
    else{
      this.errormsg = 'Add Appointment Unsuccessful';
    }

  }
//to update an appointment
appointmentUpdate()
{
  console.log(this.patientForm.value,'updatedform');

  if(this.patientForm.valid)
  {
    this.service.updateappointment(this.patientForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}