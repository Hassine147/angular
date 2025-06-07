import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingGames: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingGames();

  }
  getTrendingGames() {
    this.http.get('assets/data/trending-games.json').subscribe((games) => {
      this.trendingGames = games;
      console.log(this.trendingGames)

    });

  }
}
