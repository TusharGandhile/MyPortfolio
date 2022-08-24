import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-details',
  templateUrl: './user-form-details.component.html',
  styleUrls: ['./user-form-details.component.scss']
})
export class UserFormDetailsComponent implements OnInit {
  UserDetails!:FormGroup;
  displayHome=false;
  displayAbout=false;
  displayPortfolio=false;
  displayBlog=false;
  displayService=false;
  displayContact=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  this.UserDetails=this.formBuilder.group({
    home:this.formBuilder.group({
      fullName: ['', Validators.required],
      role: ['', Validators.required],
      twitterLink: ['', Validators.required],
      instaLink:[''],
      inLink:['']}),
    about:this.formBuilder.group({
      about:['']
    }),
    portfolio:this.formBuilder.group({
      
    }),
    blog:this.formBuilder.group({
      
    }),
    service:this.formBuilder.group({
      
    }),
    contact:this.formBuilder.group({
      mobileNumber:[''],
      email:[''],
      address:['']
    })

  })

 
 }

 get portfolio(){
  return this.UserDetails.controls['portfolio'] as FormArray;
 }

 get service(){

 }
 get blog(){

 }
 homeChange(event:any){
  (event.target.checked)?this.displayHome=true:this.displayHome=false;
}
aboutChange(event:any){
  (event.target.checked)?this.displayAbout=true:this.displayAbout=false;
}
portfolioChange(event:any){
  (event.target.checked)?this.displayPortfolio=true:this.displayPortfolio=false;
}
serviceChange(event:any){
  (event.target.checked)?this.displayService=true:this.displayService=false;
}
blogChange(event:any){
  (event.target.checked)?this.displayBlog=true:this.displayBlog=false;
}
contactChange(event:any){
  (event.target.checked)?this.displayContact=true:this.displayContact=false;

}
addProject(){
  this.portfolio.push(this.formBuilder.group({
      projectName:[''],
      description:[''],
      
      duration:[''],
  }))
}
  submitUserDetails(){
    console.log(this.UserDetails.value);
  }
}
