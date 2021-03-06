import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './components/stats/stats.component';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { ParticleBackgroundComponent } from './particle-background/particle-background.component';
import { VideoScrollComponent } from './video-scroll/video-scroll.component';


const routes: Routes = [
  {
    path: '', component: ParticleBackgroundComponent
  },
  {
    path: 'video_scroll', component: VideoScrollComponent
  },
  {
    path: 'stats', component: StatsComponent
  },
  {
    path: 'landmarks', component: LandmarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
