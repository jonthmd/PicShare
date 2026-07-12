import { Component, Input, OnInit } from '@angular/core';
import { Pic } from '../models/shared-pic';
import {
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-shared-pic',
  imports: [NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, PercentPipe ],
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
  likeButtonText!: string;
  userHasLiked!: boolean;
  myPercentage: number = 0.389;

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
      this.unlike();
    } else {
      this.like();
    }
  }

  like(): void {
    this.pic.addLike();
    this.likeButtonText = 'Unlike it.';
    this.userHasLiked = true;
  }

  unlike(): void {
    this.pic.removeLike();
    this.likeButtonText = 'I like it!';
    this.userHasLiked = false;
  }
}
