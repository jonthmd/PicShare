import { Component, OnInit } from '@angular/core';
import { SharedPic } from './shared-pic/shared-pic';
import { Pic } from './models/shared-pic';

@Component({
  selector: 'app-root',
  imports: [SharedPic],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  myPic!: Pic;
  mySecondPic!: Pic;
  myThirdPic!: Pic;

  ngOnInit(): void {
    this.myPic = new Pic(
      'Ferrari',
      'https://testecar.com/wp-content/uploads/2026/05/ferrari-luce-avant-gauche-1024x576.jpg',
      'Luce?!',
      new Date(),
      0,
    );
    this.mySecondPic = new Pic(
      'Talbo',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQh3qnbAr0FKdQ8h63xCsKWMWT3pNmZ69aTMNSpmgtw&s=10',
      'Samba!',
      new Date(),
      1,
    );
    this.myThirdPic = new Pic(
      'Renault',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kdLuABwr9vTKXIYBpACoHzGRSMdl0CZzvx3G28iu_g&s=10',
      '18!',
      new Date(),
      2,
    );
    this.myThirdPic.setLocation('Dans le 18ème...')
  }
}
