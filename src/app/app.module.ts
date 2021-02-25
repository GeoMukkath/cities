import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
