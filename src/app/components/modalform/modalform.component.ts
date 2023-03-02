import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})

export class ModalformComponent {

  public form: any;

  @Input() userSelected: any;
  @Input() isNewFormCondition: any;

  @Output() closeModalDialog = new EventEmitter();
  @Output() submitData = new EventEmitter();

  ngOnInit() {
    if (this.userSelected && this.isNewFormCondition === false) {
      this.form = new FormGroup({
        username: new FormControl(this.userSelected.username, Validators.required),
        message: new FormControl(this.userSelected.message, Validators.required),
        datetime: new FormControl(this.userSelected.datetime, Validators.required)
      })
    } else {
      this.form = new FormGroup({
        username: new FormControl('', Validators.required),
        message: new FormControl('', Validators.required),
        datetime: new FormControl('', Validators.required)
      })
    }
  }

  closeButton() {
    this.closeModalDialog.emit();
  }

  sendData() {
    const formValue = this.form.getRawValue();
    this.submitData.emit(formValue);
  }
}
