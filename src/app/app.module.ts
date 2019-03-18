import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeAndMoneyComponent } from './life-and-money/life-and-money.component';
import { ServicesComponent } from './services/services.component';
import { CultureComponent } from './life-and-money/culture/culture.component';
import { TravelComponent } from './life-and-money/travel/travel.component';
import { MilestonesComponent } from './life-and-money/milestones/milestones.component';
import { MoneyComponent } from './life-and-money/money/money.component';
import { WellBeingComponent } from './life-and-money/well-being/well-being.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeAndMoneyComponent,
    ServicesComponent,
    CultureComponent,
    TravelComponent,
    MilestonesComponent,
    MoneyComponent,
    WellBeingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
