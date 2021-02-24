import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticleBackgroundComponent } from './particle-background/particle-background.component';
import { VideoScrollComponent } from './video-scroll/video-scroll.component';


const routes: Routes = [
  {
    path: '', component: ParticleBackgroundComponent
  },
  {
    path: 'video_scroll', component: VideoScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
