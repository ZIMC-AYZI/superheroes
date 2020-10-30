import {Component, EventEmitter, Output} from '@angular/core';
import {alphaLetters} from "../../../shared/utils/constants/alhfa-betical-letters.const";

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.scss']
})
export class AlphabeticalComponent {
  @Output() myLetter: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchBtn: EventEmitter<boolean> = new EventEmitter<boolean>();
  public menuLetters: string[] = alphaLetters;
  public myTargetLetter: string;

  showMyTarget(letter: string) {
    this.myTargetLetter = letter;
    this.myLetter.emit(letter)
  }

  searchByBtn() {
    this.searchBtn.emit(false)
  }
}
