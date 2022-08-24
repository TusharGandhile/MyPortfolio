import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
userServices:any[]=[];
modalData:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.userServices= this.dataService.UserServices;
   console.log(this.userServices);
   
  }
  openModal(service:any){
// console.log(service);
this.modalData=service;
console.log(this.modalData);


    
  }
}
