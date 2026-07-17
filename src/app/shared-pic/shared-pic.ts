import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '../models/shared-pic-model';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { SharedPicsService } from '../services/shared-pics.service';

@Component({
  selector: 'app-shared-pic',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './shared-pic.html',
  styleUrl: './shared-pic.scss',
})
export class SharedPic implements OnInit {
  @Input() pic!: Pic;

  // title!: string;
  // description!: string;
  // createdAt!: Date;
  // likes!: number;
  // imageUrl!: string;
  // myMoney: number = 389.5;

  likeButtonText!: string;
  userHasLiked!: boolean;

  constructor(private sharedPicsService: SharedPicsService) {

  }

  ngOnInit(): void {
    // this.title = 'Ferrari';
    // this.description = 'Luce ?!';
    // this.createdAt = new Date();
    // this.likes = 9;
    // this.imageUrl =
    //   'https://testecar.com/wp-content/uploads/2026/05/ferrari-luce-avant-gauche-1024x576.jpg';
    this.likeButtonText = 'I like it!';
    this.userHasLiked = false;
  }

  onLike(): void {
    if (this.userHasLiked) {
      this.dislike();
    } else {
      this.like();
    }
  }

  like(): void {
    this.sharedPicsService.likeSharedPicById(this.pic.id, 'like');
    this.likeButtonText = 'Dislike it.';
    this.userHasLiked = true;
  }

  dislike(): void {
    this.sharedPicsService.likeSharedPicById(this.pic.id, 'dislike');
    this.likeButtonText = 'I like it!';
    this.userHasLiked = false;
  }
}
