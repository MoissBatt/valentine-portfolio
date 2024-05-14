import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './home-page-components/profile/profile.component';
import { CosplayComponent } from './cosplay/cosplay.component';
import { CosplayTarecgosaComponent } from './cosplay-components/projects/cosplay-tarecgosa/cosplay-tarecgosa.component';
import { CosplaySogekingComponent } from './cosplay-components/projects/cosplay-sogeking/cosplay-sogeking.component'; 
import { CosplayRedComponent } from './cosplay-components/projects/cosplay-red/cosplay-red.component'; 
import { CosplayThrallComponent } from './cosplay-components/projects/cosplay-thrall/cosplay-thrall.component';
import { CosplayTyrandeComponent } from './cosplay-components/projects/cosplay-tyrande/cosplay-tyrande.component';
import { CosplayTalanjiComponent } from './cosplay-components/projects/cosplay-talanji/cosplay-talanji.component';
import { CosplayPbComponent } from './cosplay-components/projects/cosplay-pb/cosplay-pb.component';
import { CosplaySteampunkComponent } from './cosplay-components/projects/cosplay-steampunk/cosplay-steampunk.component';
import { DevComponent } from './dev/dev.component';

const routes: Routes = [
  { path: 'cosplay', component: CosplayComponent },
  { path: 'cosplay/tarecgosa', component: CosplayTarecgosaComponent },
  { path: 'cosplay/sogeking', component: CosplaySogekingComponent },
  { path: 'cosplay/talanji', component: CosplayTalanjiComponent },
  { path: 'cosplay/red', component: CosplayRedComponent },
  { path: 'cosplay/thrall', component: CosplayThrallComponent },
  { path: 'cosplay/tyrande', component: CosplayTyrandeComponent },
  { path: 'cosplay/pb', component: CosplayPbComponent },
  { path: 'cosplay/steampunk', component: CosplaySteampunkComponent },
  { path: 'dev', component: DevComponent },
  { path: '**', component: ProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled', 
    onSameUrlNavigation: 'reload', 
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
