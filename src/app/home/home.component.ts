import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  champions: any;
  raceWinners: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getWorldChampions().subscribe(data => {
      this.champions = data;
    });
  }

  showRaceWinners(year: string) {
    this.api.getRaceWinners(year).subscribe(data => {
      this.raceWinners = data;
    });
  }
}
