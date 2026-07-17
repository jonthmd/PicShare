import {Injectable} from '@angular/core';
import { Pic } from '../models/shared-pic-model';
import { PicType } from '../models/pic-type.type';

@Injectable({
  providedIn: 'root',
})
export class SharedPicsService {
  private pics: Pic[] = [
    new Pic(
      'ferrari',
      'https://testecar.com/wp-content/uploads/2026/05/ferrari-luce-avant-gauche-1024x576.jpg',
      'Luce?!',
      new Date(),
      0,
    ),
    new Pic(
      'talbo',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQh3qnbAr0FKdQ8h63xCsKWMWT3pNmZ69aTMNSpmgtw&s=10',
      'Samba 💃🏾',
      new Date(),
      100,
    ),
    new Pic(
      'renault',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2kdLuABwr9vTKXIYBpACoHzGRSMdl0CZzvx3G28iu_g&s=10',
      '18!',
      new Date(),
      200,
    ).withLocation('Dans le 18ème...'),
  ];

  getPics(): Pic[] {
    return [...this.pics];
  }

  likeSharedPicById(picId: string, picType: PicType): void {
    const foundPic = this.pics.find(pic => pic.id === picId);
    if (!foundPic) {
      throw new Error('Failed to find pic with id ' + picId);
    }
    foundPic.pic(picType);
  }
}
