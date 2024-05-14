import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatMenuModule } from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page-components/navbar/navbar.component';
import { ProfileComponent } from './home-page-components/profile/profile.component';
import { CosplayComponent } from './cosplay/cosplay.component';
import { DevComponent } from './dev/dev.component';
import { ExperienceComponent } from './dev-components/experience/experience.component';
import { FormationComponent } from './dev-components/formation/formation.component';
import { CompetenceComponent } from './dev-components/competence/competence.component';
import { ScrollService } from './service/scroll-service';
import { MentionsModalComponent } from './home-page-components/mentions-modal/mentions-modal.component';
import { PresentationComponent } from './cosplay-components/presentation/presentation.component';
import { ConcoursComponent } from './cosplay-components/concours/concours.component';
import { ProjetsComponent } from './cosplay-components/projets/projets.component';
import { CosplayRedComponent } from './cosplay-components/projects/cosplay-red/cosplay-red.component';
import { CosplayThrallComponent } from './cosplay-components/projects/cosplay-thrall/cosplay-thrall.component';
import { CosplayPbComponent } from './cosplay-components/projects/cosplay-pb/cosplay-pb.component';
import { CosplaySteampunkComponent } from './cosplay-components/projects/cosplay-steampunk/cosplay-steampunk.component';
import { CosplayTyrandeComponent } from './cosplay-components/projects/cosplay-tyrande/cosplay-tyrande.component';
import { CosplayTarecgosaComponent } from './cosplay-components/projects/cosplay-tarecgosa/cosplay-tarecgosa.component';
import { CosplaySogekingComponent } from './cosplay-components/projects/cosplay-sogeking/cosplay-sogeking.component';
import { CosplayTalanjiComponent } from './cosplay-components/projects/cosplay-talanji/cosplay-talanji.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProfileComponent,
    CosplayComponent,
    DevComponent,
    ExperienceComponent,
    FormationComponent,
    CompetenceComponent,
    MentionsModalComponent,
    PresentationComponent,
    ConcoursComponent,
    ProjetsComponent,
    CosplayRedComponent,
    CosplayThrallComponent,
    CosplayPbComponent,
    CosplaySteampunkComponent,
    CosplayTyrandeComponent,
    CosplayTarecgosaComponent,
    CosplaySogekingComponent,
    CosplayTalanjiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MdbModalModule,
    YouTubePlayerModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
