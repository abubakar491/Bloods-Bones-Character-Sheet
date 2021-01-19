import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-character', pathMatch: 'full' },
  {
    path: 'my-character',
    loadChildren: () =>
      import('@modules/character/character.module')
      .then((m) => m.CharacterModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
