import { Component, OnInit } from '@angular/core';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Pic } from '../models/shared-pic-model';
import { SharedPicsService } from '../services/shared-pics.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-shared-pic',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-shared-pic.html',
  styleUrl: './single-shared-pic.scss',
})
export class SingleSharedPic implements OnInit {
  pic!: Pic;
  likeButtonText!: string;
  userHasLiked!: boolean;

  constructor(private sharedPicsService: SharedPicsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.interfacePic();
    this.getPic();
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

  private interfacePic() {
    this.likeButtonText = 'I like it!';
    this.userHasLiked = false;
  }

  private getPic() {
    const picId = this.route.snapshot.params['id'];
    this.pic = this.sharedPicsService.getPicById(picId);
  }
}
