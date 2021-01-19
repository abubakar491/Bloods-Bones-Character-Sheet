import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCharacterComponent } from './my-character/my-character.component'

const routes: Routes = [
  {
    path: '',
    component: MyCharacterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterRoutingModule {}
