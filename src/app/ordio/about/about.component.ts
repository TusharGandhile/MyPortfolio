import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skills=false;
  exp=true;
  edu=false;
  fileUrl: SafeResourceUrl | undefined;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    const data = 'some text';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
openSkills(){
  this.skills=true;
  this.exp=false;
  this.edu=false;
}
openExperience(){
  this.skills=false;
  this.edu=false;
  this.exp=true;
}
openEducation(){
  this.skills=false;
  this.exp=false;
  this.edu=true;

}
downloadFile(){

}
}
