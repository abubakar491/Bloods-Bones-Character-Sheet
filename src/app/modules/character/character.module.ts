import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module'
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CharacterRoutingModule } from './character-routing.module'
import { MyCharacterComponent } from './my-character/my-character.component';
import { BaseAttributesComponent } from './my-character/base-attributes/base-attributes.component'
import { CombatAttributesComponent } from './my-character/combat-attributes/combat-attributes.component'
import { CharacterSkillsComponent } from './my-character/character-skills/character-skills.component'

@NgModule({
  declarations: [
    MyCharacterComponent,
    BaseAttributesComponent,
    CombatAttributesComponent,
    CharacterSkillsComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class CharacterModule { }
