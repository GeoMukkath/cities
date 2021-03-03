import { Component, ElementRef, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css']
})
export class LandmarksComponent implements OnInit {
  lat = 13;
  lng = 80;
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  
}
