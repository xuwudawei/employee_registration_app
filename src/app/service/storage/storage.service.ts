import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private employeeStorage: Storage) {}

  store(key: string, data: any) {
    this.employeeStorage.set(key, data);
  }

  get(key: string) {
    return this.employeeStorage.get(key);
  }
}
