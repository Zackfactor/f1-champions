import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://ergast.com/api/f1';

  constructor(private http: HttpClient) { }

  getWorldChampions() {
    return this.http.get(`${this.baseUrl}/driverStandings/1.json?limit=100`);
  }

  getRaceWinners(year: string) {
    return this.http.get(`${this.baseUrl}/${year}/results/1.json`);
  }
}
