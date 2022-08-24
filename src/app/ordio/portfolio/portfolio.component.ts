import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../DataService/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  @ViewChild('mainCarousel',{static:false}) mainCarousel:any;
  projectDetails:any[]=[];
  showProject:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
this.projectDetails=this.dataService.projectData;
  }

  openModal(project:any){
    console.log(project);
    
    this.showProject=project;
    
  }
}
