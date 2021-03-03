import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticleBackgroundComponent } from './particle-background/particle-background.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './components/intro/intro.component';
import { DescriptionComponent } from './components/description/description.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { VideoScrollComponent } from './video-scroll/video-scroll.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule } from 'ng2-charts';
import { StatsComponent } from './components/stats/stats.component';
import { LandmarksComponent } from './landmarks/landmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleBackgroundComponent,
    NavbarComponent,
    SliderComponent,
    IntroComponent,
    DescriptionComponent,
    VideoScrollComponent,
    ImageGridComponent,
    FooterComponent,
    StatsComponent,
    LandmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    ScullyLibModule,
    ChartsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
