import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public textButton: string=''

  @Output()
  public readonly buttonClick = new EventEmitter

  public submit(): void {
    this.buttonClick.emit();
  }
}
