import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShoesComponent} from "./shoes/shoes.component";
import {HomeComponent} from "./home/home.component";
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ClothingComponent} from "./clothing/clothing.component";
import {ShopAllComponent} from "./shop-all/shop-all.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {AdidasFoamRNNRComponent} from "./adidas-foam-rnnr/adidas-foam-rnnr.component";
import {AdidasSlideComponent} from "./adidas-slide/adidas-slide.component";
import {NikeDunkLowComponent} from "./nike-dunk-low/nike-dunk-low.component";
import {NikeSBDunkLowComponent} from "./nike-sbdunk-low/nike-sbdunk-low.component";
import {ConverseChuckTaylorComponent} from "./converse-chuck-taylor/converse-chuck-taylor.component";
import {AdidasYeezyKnitRNNRComponent} from "./adidas-yeezy-knit-rnnr/adidas-yeezy-knit-rnnr.component";
import {AirJordanHighZoomComponent} from "./air-jordan-high-zoom/air-jordan-high-zoom.component";
import {NewBalanceComponent} from "./new-balance/new-balance.component";
import {FearOfGodPulloverHoodieComponent} from "./fear-of-god-pullover-hoodie/fear-of-god-pullover-hoodie.component";
import {PopSmokexVloneTeeComponent} from "./pop-smokex-vlone-tee/pop-smokex-vlone-tee.component";
import {
  JuiceWrldxVloneLegendsNeverDieShirtComponent
} from "./juice-wrldx-vlone-legends-never-die-shirt/juice-wrldx-vlone-legends-never-die-shirt.component";
import {FearOfGodShortsComponent} from "./fear-of-god-shorts/fear-of-god-shorts.component";
import {NikeTechFleeceJoggersComponent} from "./nike-tech-fleece-joggers/nike-tech-fleece-joggers.component";
import {FearOfGodSweatpantsComponent} from "./fear-of-god-sweatpants/fear-of-god-sweatpants.component";
import {PalaceAMG20LondonShirtComponent} from "./palace-amg20-london-shirt/palace-amg20-london-shirt.component";
import {
  GuccixTheNorthFaceAnorakJacketComponent
} from "./guccix-the-north-face-anorak-jacket/guccix-the-north-face-anorak-jacket.component";


export const routes: Routes = [

  {path: 'shoes', component: ShoesComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'shopAll', component: ShopAllComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent},

  //Shoes
  {path: 'adidasFoamRNNR', component: AdidasFoamRNNRComponent},
  {path: 'adidasYeezySlide', component: AdidasSlideComponent},
  {path: 'nikeDunkLow', component: NikeDunkLowComponent},
  {path: 'nikeSBDunkLow', component: NikeSBDunkLowComponent},
  {path: 'converseChuckTaylor', component: ConverseChuckTaylorComponent},
  {path: 'adidasYeezyKnitRNNR', component: AdidasYeezyKnitRNNRComponent},
  {path: 'airJordanHighZoom', component: AirJordanHighZoomComponent},
  {path: 'newBalance', component: NewBalanceComponent},

  //Apparel
  {path: 'fearOfGodPulloverHoodie', component: FearOfGodPulloverHoodieComponent},
  {path: 'popSmokexVloneTee', component: PopSmokexVloneTeeComponent},
  {path: 'juiceWrldxVloneLegendsNeverDieTShirt', component: JuiceWrldxVloneLegendsNeverDieShirtComponent},
  {path: 'fearOfGodShorts', component: FearOfGodShortsComponent},
  {path: 'nikeTechFleeceJoggers', component: NikeTechFleeceJoggersComponent},
  {path: 'fearOfGodSweatpants', component: FearOfGodSweatpantsComponent},
  {path: 'palaceAMG20LondinTShirt', component: PalaceAMG20LondonShirtComponent},
  {path: 'guccixTheNorthFaceAnorakJacket', component: GuccixTheNorthFaceAnorakJacketComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
