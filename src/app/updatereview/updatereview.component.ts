import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatereview',
  templateUrl: './updatereview.component.html',
  styleUrls: ['./updatereview.component.css']
})

export class UpdatereviewComponent implements OnInit {

  reviewForm = new FormGroup({
    'patientName':new FormControl('',Validators.required),
    'patientPhone':new FormControl('',Validators.required),
    'review':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnereview(this.router.snapshot.params['appointment_no']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.reviewForm.patchValue({
          patientName:res.data[0].patientName,
          patientPhone:res.data[0].patientPhone,
          review:res.data[0].review

        });
      });
  }
//to update a review
reviewUpdate()
{
  console.log(this.reviewForm.value);
    this.service.updatereview(this.router.snapshot.params['appointment_no'], this.reviewForm.value).subscribe((result:any)=>{

    this.reviewForm.reset();
    this.successmsg = 'Review successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}