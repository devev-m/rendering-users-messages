import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent {
  
	// private confirm() {
	// 	this.isConfirmed = true;
	// }

	// close() {
	// 	this.isConfirmed.emit(false);
	// }

  @Output()
  public readonly buttonClick = new EventEmitter;

  public submit(): void {
    this.buttonClick.emit();
  }
}
