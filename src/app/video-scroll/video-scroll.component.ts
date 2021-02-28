import {AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';


@Component({
  selector: 'app-video-scroll',
  templateUrl: './video-scroll.component.html',
  styleUrls: ['./video-scroll.component.css']
})
export class VideoScrollComponent implements OnInit {
  videoRef: HTMLVideoElement;

  @ViewChild('videoPlayer', { static: true })
  set mainVideoEl(el: ElementRef) {
    this.videoRef = el.nativeElement;
  }

  frameNumber = 0; // start video at frame 0
  playbackConst = 900; // speed of video. lower is faster

  ngAfterContentInit(): void {
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }

  scrollPlay() {
    this.frameNumber  = window.pageYOffset / this.playbackConst;
    this.videoRef.currentTime  = this.frameNumber;
    window.requestAnimationFrame(this.scrollPlay.bind(this));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
