import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public pdfSrc: string;
  constructor() { }

  ngOnInit(): void {
    this.pdfSrc ='../../../assets/Harshal_Resume.pdf';
  }

  public onClick(): void{

  }
}
