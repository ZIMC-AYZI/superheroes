import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss']
})
export class AlphabeticalComponent {
  @Output() myLetter: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchBtn: EventEmitter<boolean> = new EventEmitter<boolean>();
  public menuLetters: string[] = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ];
  public myTargetLetter: string;

  showMyTarget(letter) {
    this.myTargetLetter = letter;
    this.myLetter.emit(letter)
  }

  searchByBtn() {
    this.searchBtn.emit(false)
  }
}
