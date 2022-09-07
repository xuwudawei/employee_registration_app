
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  post(serviceUrl: string, data: any, header: any) {
    this.loadingService.showLoading();
    const url = environment.apiUrl + serviceUrl;
    // return this.http.post(url, JSON.stringify(data), header)
    return this.http.post(url, data, header);
  }

  get(serviceUrl: string, header: any) {
    this.loadingService.showLoading();
    const url = environment.apiUrl + serviceUrl;
    return this.http.get(url, header);
  }
}
