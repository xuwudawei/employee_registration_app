import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GetEmployeesService } from '../service/getEmployees/get-employees.service';
import { LoadingService } from '../service/loading/loading.service';
import { StorageService } from '../service/storage/storage.service';
import { ToastService } from '../service/toast/toast.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  private employeeList: string[];
  constructor(
    private getEmployeesService: GetEmployeesService,
    private loadingService: LoadingService,
    private toastService: ToastService,
    private navCtrl: NavController,
    private storgaeService: StorageService
  ) {}
  ngOnInit() {
    this.fetchAllEmployees();
  }

  fetchAllEmployees() {
    this.getEmployeesService.getAllEmployees().subscribe((res) => {
      this.loadingService.dismissLoading();
      this.toastService.presentToast('Employees Fetched Successfully!', false);
      res['data'].forEach((element) => {
        this.storgaeService.store(element.uid.toString(), element);
      });

      this.employeeList = res['data'];
    });
  }
}
