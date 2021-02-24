import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoScrollComponent } from './video-scroll.component';

describe('VideoScrollComponent', () => {
  let component: VideoScrollComponent;
  let fixture: ComponentFixture<VideoScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
