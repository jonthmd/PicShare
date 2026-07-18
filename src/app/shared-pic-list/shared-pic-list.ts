import { Component, OnInit } from '@angular/core';
import { Pic } from '../models/shared-pic-model';
import { SharedPic } from '../shared-pic/shared-pic';
import { SharedPicsService } from '../services/shared-pics.service';

@Component({
  selector: 'app-shared-pic-list',
  imports: [SharedPic],
  templateUrl: './shared-pic-list.html',
  styleUrl: './shared-pic-list.scss',
})
export class SharedPicList implements OnInit {
  pics!: Pic[];

  constructor(private sharedPicsService: SharedPicsService) {}

  // myPic!: Pic;
  // mySecondPic!: Pic;
  // myThirdPic!: Pic;

  ngOnInit(): void {
    this.pics = this.sharedPicsService.getPics();
  }
}
