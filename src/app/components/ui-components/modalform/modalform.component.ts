import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})
export class ModalformComponent {
  
  @Output() closeModalDialog = new EventEmitter();
  @Output() submitData = new EventEmitter();

  buttonClose(){
    this.closeModalDialog.emit();
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.submitData.emit();
  }
}
