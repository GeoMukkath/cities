import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  left_count = 0;
  right_count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  left_counter(){	
    this.left_count += 1; 
    console.log("Left: " + this.left_count);
  }

  right_counter(){	
    this.right_count += 1; 
    console.log("Right: " + this.right_count);
  }
 
}
