import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  ISkillMind,
  ISkillPresence,
  ISkillDexterity,
  ISkillStrength,
  ISkills
} from '@shared/interfaces/ICharacter'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private subject = new Subject<any>();

  constructor() { }

  saveSkill(skill) {
    this.subject.next(skill);
  }

  getSkill(): Observable<any> {
      return this.subject.asObservable();
  }
}
