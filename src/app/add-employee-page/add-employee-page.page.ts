import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Employee } from '../interface/employee';
import { AddEmployeeService } from '../service/addEmployee/add-employee.service';
import { GetEmployeesService } from '../service/getEmployees/get-employees.service';
import { LoadingService } from '../service/loading/loading.service';
import { ToastService } from '../service/toast/toast.service';

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
    public addNewEmployeeFormBuilder: FormBuilder,
    private addEmployeesService: AddEmployeeService,
    private loadingService: LoadingService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}
  submitEmployeeForm() {
    if (!this.addNewEmployeeForm.valid) {
      return;
    }
    const employee: Employee = {
      name: this.addNewEmployeeForm.value.name,
      uid: this.addNewEmployeeForm.value.uid,
      email: this.addNewEmployeeForm.value.email,
      phone: this.addNewEmployeeForm.value.phone,
      designation: this.addNewEmployeeForm.value.designation,
    };

    this.addEmployeesService.addEmployee(employee).subscribe((res) => {
      this.loadingService.dismissLoading();
      console.log(res);
      this.addNewEmployeeForm.reset();
      this.toastService.presentToast('Employee Added Successfully!', false);
    });
  }
}
