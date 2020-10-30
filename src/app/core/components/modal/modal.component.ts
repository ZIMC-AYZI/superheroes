import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() opened;
  @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  public closeModal(): void {
    this.opened = false;
    this.openedChange.emit(false);
  }
}
