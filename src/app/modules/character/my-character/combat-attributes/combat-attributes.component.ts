import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  IBaseAttributes, 
  ICombatAttributes
} from '@shared/interfaces/ICharacter'

@Component({
  selector: 'app-combat-attributes',
  templateUrl: './combat-attributes.component.html'
})
export class CombatAttributesComponent implements OnInit {

  @Input() characterDamage: number = 0;
  @Input() characterBaseAttributes: IBaseAttributes;
  @Output() changeCombatAttributes: EventEmitter<any> = new EventEmitter();

  combatAttributes: ICombatAttributes = {
    Vitality: 0,
    Evasion: 0,
    Armor: 0,
    Alacrity: 0,
    Tenacity: 0,
    Power: 0
  }

  constructor() { }

  ngOnInit(): void {
    this.initCombatAttributes()
  }

  ngOnChanges(changes): void {
    this.initCombatAttributes()
  }

  initCombatAttributes(){
    
    this.combatAttributes.Vitality = 
      this.characterBaseAttributes.Strength + 3 - this.characterDamage;

    this.combatAttributes.Evasion = this.characterBaseAttributes.Dexterity + 10;

    this.combatAttributes.Armor = this.characterBaseAttributes.Dexterity + 10;

    this.combatAttributes.Alacrity = 
      this.characterBaseAttributes.Dexterity + 
      this.characterBaseAttributes.Mind;

    
    this.combatAttributes.Tenacity = this.characterBaseAttributes.Presence + 1;
    this.combatAttributes.Power = 0;

    this.changeCombatAttributes.emit(this.combatAttributes)
  }

  updatedTenacity(){
    this.changeCombatAttributes.emit(this.combatAttributes)
  }

}
