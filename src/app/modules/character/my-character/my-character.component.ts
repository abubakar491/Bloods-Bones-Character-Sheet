import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { CharacterService } from '../character.service'

import {
  ICharacter, 
  IBaseAttributes, 
  ICombatAttributes,
  ISkills
} from '@shared/interfaces/ICharacter'

@Component({
  selector: 'app-my-character',
  templateUrl: './my-character.component.html'
})
export class MyCharacterComponent implements OnInit {
  
  characterName: string = '';
  Damage: number = 0;
  characterBaseAttributes: IBaseAttributes = {
    Strength: 0,
    Dexterity: 0,
    Mind: 0,
    Presence: 0
  };
  characterCombatAttributes: ICombatAttributes;
  characterSkills: ISkills;

  skillsSubscription: Subscription;

  @ViewChild('character', {static: false}) character: ElementRef;
  constructor(
    private _dataService: CharacterService
  ) { }

  ngOnInit(): void {
    this.skillsSubscription = 
      this._dataService.getSkill()
      .subscribe(skills => {
        this.characterSkills = skills
      })
  }

  updateBaseAttributes(baseAttributes){
    this.characterBaseAttributes = {...baseAttributes}
  }
  
  updateCombatAttributes(combatAttributes){
    this.characterCombatAttributes = {...combatAttributes}
  }

  updateSkill(skills){
    this.characterSkills = {...skills}
  }

  ngOnDestroy() {
    this.skillsSubscription.unsubscribe();
  }

  public print() {
    window.print();
  }

}
