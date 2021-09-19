import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaisComponent } from './pages/pais/pais.component';
import { ComedianteComponent } from './pages/comediante/comediante.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'pais/:texto', component: PaisComponent },
  { path: 'comediante/:id', component: ComedianteComponent },
  { path: '**', redirectTo: '/home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
