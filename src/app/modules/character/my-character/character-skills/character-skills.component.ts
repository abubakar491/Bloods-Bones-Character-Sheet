import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CharacterService } from '../../character.service'

import {
  IBaseAttributes
} from '@shared/interfaces/ICharacter'

@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.scss']
})
export class CharacterSkillsComponent implements OnInit {

  @Input() characterBaseAttributes: IBaseAttributes;
  @Output() changeCombatAttributes: EventEmitter<any> = new EventEmitter();
  
  StrengthForm = new FormGroup({
    Fighting: new FormControl(0)
  })

  DexterityForm = new FormGroup({
    Fighting: new FormControl(0),
    Thievery: new FormControl(0),
    Stealth: new FormControl(0),
    Archery: new FormControl(0),
  })

  MindForm = new FormGroup({
    Learned: new FormControl(0),
    Survival: new FormControl(0),
    Perception: new FormControl(0),
    Apothecary: new FormControl(0),
  })

  PresenceForm = new FormGroup({
    Intimidation: new FormControl(0),
    Performance: new FormControl(0),
    Manipulation: new FormControl(0),
    Insight: new FormControl(0),
    Power: new FormControl(0),
  })

  formInvalid: boolean = false;
  formSaved: boolean = false;
  constructor(
    private _dataService: CharacterService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes){
    //Can be optimised more
    this.StrengthForm.controls.Fighting.setValidators([Validators.max(this.characterBaseAttributes.Strength)]);

    this.DexterityForm.controls.Fighting.setValidators([Validators.max(this.characterBaseAttributes.Dexterity)]);
    this.DexterityForm.controls.Thievery.setValidators([Validators.max(this.characterBaseAttributes.Dexterity)]);
    this.DexterityForm.controls.Stealth.setValidators([Validators.max(this.characterBaseAttributes.Dexterity)]);
    this.DexterityForm.controls.Archery.setValidators([Validators.max(this.characterBaseAttributes.Dexterity)]);

    this.MindForm.controls.Learned.setValidators([Validators.max(this.characterBaseAttributes.Mind)]);
    this.MindForm.controls.Survival.setValidators([Validators.max(this.characterBaseAttributes.Mind)]);
    this.MindForm.controls.Perception.setValidators([Validators.max(this.characterBaseAttributes.Mind)]);
    this.MindForm.controls.Apothecary.setValidators([Validators.max(this.characterBaseAttributes.Mind)]);

    this.PresenceForm.controls.Intimidation.setValidators([Validators.max(this.characterBaseAttributes.Presence)]);
    this.PresenceForm.controls.Performance.setValidators([Validators.max(this.characterBaseAttributes.Presence)]);
    this.PresenceForm.controls.Manipulation.setValidators([Validators.max(this.characterBaseAttributes.Presence)]);
    this.PresenceForm.controls.Insight.setValidators([Validators.max(this.characterBaseAttributes.Presence)]);
    this.PresenceForm.controls.Power.setValidators([Validators.max(this.characterBaseAttributes.Presence)]);
  }

  saveSkills(){
    if(
      this.StrengthForm.valid &&
      this.DexterityForm.valid &&
      this.MindForm.valid &&
      this.PresenceForm.valid
    ){
      
      this._dataService.saveSkill(this.getSkills())
      this.formSaved = true;
      window.scroll(600,500)

    }else{
      this.formInvalid = true;
      window.scroll(600,500)
    }
  }

  getSkills(){
    return {
      Strength: this.StrengthForm.value,
      Dexterity: this.DexterityForm.value,
      Mind: this.MindForm.value, 
      Presence: this.PresenceForm.value,
    }
  }

}
