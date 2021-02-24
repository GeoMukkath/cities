import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
