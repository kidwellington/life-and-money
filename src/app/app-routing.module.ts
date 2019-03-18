import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CultureComponent } from './life-and-money/culture/culture.component';
import { LifeAndMoneyComponent } from './life-and-money/life-and-money.component';
import { MilestonesComponent } from './life-and-money/milestones/milestones.component';
import { MoneyComponent } from './life-and-money/money/money.component';
import { TravelComponent } from './life-and-money/travel/travel.component';
import { WellBeingComponent } from './life-and-money/well-being/well-being.component';

const routes: Routes = [
  { path: '', redirectTo: 'life-and-money', pathMatch: 'full' },
  { path: 'life-and-money',  component: LifeAndMoneyComponent },
  { path: 'life-and-money/culture',  component: CultureComponent },
  { path: 'life-and-money/milestones', component: MilestonesComponent },
  { path: 'life-and-money/money',  component: MoneyComponent },
  { path: 'life-and-money/travel',  component: TravelComponent },
  { path: 'life-and-money/well-being',  component: WellBeingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
