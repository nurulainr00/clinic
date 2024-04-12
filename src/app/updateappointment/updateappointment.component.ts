import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})

export class UpdateappointmentComponent implements OnInit {

  patientForm = new FormGroup({
    'patientName':new FormControl('',Validators.required),
    'patientPhone':new FormControl('',Validators.required),
    'patientaddress':new FormControl('',Validators.required),
    'appointmentdate':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneappointment(this.router.snapshot.params['appointment_no']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.patientForm.patchValue({
          patientName:res.data[0].patientName,
          patientPhone:res.data[0].patientPhone,
          patientaddress:res.data[0].patientaddress,
          appointmentdate:res.data[0].appointmentdate

        });
      });
  }
//to update an appointment
appointmentUpdate()
{
  console.log(this.patientForm.value);
    this.service.updateappointment(this.router.snapshot.params['appointment_no'], this.patientForm.value).subscribe((result:any)=>{

    this.patientForm.reset();
    this.successmsg = 'Appointment successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}