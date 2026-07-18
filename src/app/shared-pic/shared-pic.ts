import { Component, Input } from '@angular/core';
import { Pic } from '../models/shared-pic-model';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-pic',
  imports: [TitleCasePipe],
  templateUrl: './shared-pic.html',
  styleUrl: './shared-pic.scss',
})
export class SharedPic {
  @Input() pic!: Pic;

  constructor(private router: Router) {}

  protected onViewPic() {
    this.router.navigateByUrl(`pics/${this.pic.id}`);
  }
}
