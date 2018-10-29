import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: CardsComponent
  },
  {
    path: 'home',
    component: CardsComponent
  },
  {
    path: 'books',
    component: CardsComponent
  },
  {
    path: 'houses',
    component: CardsComponent
  },
  {
    path: 'characters',
    component: CardsComponent
  },
  {
    path: 'characters/:characterId',
    component: DetailsComponent
  },
  {
    path: 'books/:bookId',
    component: DetailsComponent
  },
  {
    path: 'houses/:houseId',
    component: DetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
