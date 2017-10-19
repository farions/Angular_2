import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component'
import { AutoresComponent } from './main/autores/autores.component'
import { CatalogoComponent } from './main/catalogo/catalogo.component'

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);