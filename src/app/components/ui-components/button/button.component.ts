import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input()
  public textButton: string='';

  @Output() closeButton = new EventEmitter;
  @Output() submitButton = new EventEmitter;

  action() {
    this.closeButton.emit();
    this.submitButton.emit();
  }
}
