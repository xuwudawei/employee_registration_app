import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.page.html',
  styleUrls: ['./add-employee-page.page.scss'],
})
export class AddEmployeePagePage implements OnInit {
    addNewEmployeeForm: FormGroup = this.addNewEmployeeFormBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    ],

    uid: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        // Validators.pattern('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$'),
      ],
    ],
    designation: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    ],
  });

  constructor(
    public modalCtrl: ModalController,
    public addNewEmployeeFormBuilder: FormBuilder
  ) {}

  ngOnInit() { }
  submitEmployeeForm(){}
}
