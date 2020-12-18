import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './cardapio/cardapio.component';
import { EditarComponent } from './cardapio/editar/editar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'cardapio/editar/:id',
    component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
