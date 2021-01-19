import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  IBaseAttributes
} from '@shared/interfaces/ICharacter'

@Component({
  selector: 'app-base-attributes',
  templateUrl: './base-attributes.component.html'
})
export class BaseAttributesComponent implements OnInit {

  @Input() characterBaseAttributes: IBaseAttributes;
  @Output() changeBaseAttributes: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  updatedBaseAttribute(){
    this.changeBaseAttributes.emit(this.characterBaseAttributes)
  }
}
