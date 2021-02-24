import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
