import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule, routes} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ShoesComponent } from './shoes/shoes.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {AdidasFoamRNNRComponent} from "./adidas-foam-rnnr/adidas-foam-rnnr.component";
import { AdidasSlideComponent } from './adidas-slide/adidas-slide.component';
import { NikeDunkLowComponent } from './nike-dunk-low/nike-dunk-low.component';
import { NikeSBDunkLowComponent } from './nike-sbdunk-low/nike-sbdunk-low.component';
import { ConverseChuckTaylorComponent } from './converse-chuck-taylor/converse-chuck-taylor.component';
import { AdidasYeezyKnitRNNRComponent } from './adidas-yeezy-knit-rnnr/adidas-yeezy-knit-rnnr.component';
import { AirJordanHighZoomComponent } from './air-jordan-high-zoom/air-jordan-high-zoom.component';
import { NewBalanceComponent } from './new-balance/new-balance.component';
import { FearOfGodPulloverHoodieComponent } from './fear-of-god-pullover-hoodie/fear-of-god-pullover-hoodie.component';
import { PopSmokexVloneTeeComponent } from './pop-smokex-vlone-tee/pop-smokex-vlone-tee.component';
import { JuiceWrldxVloneLegendsNeverDieShirtComponent } from './juice-wrldx-vlone-legends-never-die-shirt/juice-wrldx-vlone-legends-never-die-shirt.component';
import { FearOfGodShortsComponent } from './fear-of-god-shorts/fear-of-god-shorts.component';
import { NikeTechFleeceJoggersComponent } from './nike-tech-fleece-joggers/nike-tech-fleece-joggers.component';
import { FearOfGodSweatpantsComponent } from './fear-of-god-sweatpants/fear-of-god-sweatpants.component';
import { PalaceAMG20LondonShirtComponent } from './palace-amg20-london-shirt/palace-amg20-london-shirt.component';
import { GuccixTheNorthFaceAnorakJacketComponent } from './guccix-the-north-face-anorak-jacket/guccix-the-north-face-anorak-jacket.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    ClothingComponent,
    ShopAllComponent,
    ShoppingCartComponent,
    AdidasFoamRNNRComponent,
    AdidasSlideComponent,
    NikeDunkLowComponent,
    NikeSBDunkLowComponent,
    ConverseChuckTaylorComponent,
    AdidasYeezyKnitRNNRComponent,
    AirJordanHighZoomComponent,
    NewBalanceComponent,
    FearOfGodPulloverHoodieComponent,
    PopSmokexVloneTeeComponent,
    JuiceWrldxVloneLegendsNeverDieShirtComponent,
    FearOfGodShortsComponent,
    NikeTechFleeceJoggersComponent,
    FearOfGodSweatpantsComponent,
    PalaceAMG20LondonShirtComponent,
    GuccixTheNorthFaceAnorakJacketComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [LogInComponent, AdidasFoamRNNRComponent, ShoppingCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
