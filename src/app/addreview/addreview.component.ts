import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnereview(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.reviewForm.patchValue({
        patientName:res.data[0].patientName,
        patientPhone:res.data[0].patientPhone,
        review:res.data[0].review,

      });
    });
  }
  }

  reviewForm = new FormGroup({
    'patientName':new FormControl('',Validators.required),
    'patientPhone':new FormControl('',Validators.required),
    'review':new FormControl('',Validators.required)


  });

  //to create a new review
  reviewSubmit(){
    if(this.reviewForm.valid){
      console.log(this.reviewForm.value);
      this.service.createreview( this.reviewForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.reviewForm.reset();
        this.successmsg = 'Add Review Successful';
      });

    }
    else{
      this.errormsg = 'Add Review Unsuccessful';
    }

  }
//to update a review
reviewUpdate()
{
  console.log(this.reviewForm.value,'updatedform');

  if(this.reviewForm.valid)
  {
    this.service.updatereview(this.reviewForm.value,this.getparamid).subscribe((res)=>{
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