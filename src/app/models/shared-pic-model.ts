import { PicType } from './pic-type.type';

export class Pic {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public likes: number,
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addLike(): void {
    this.likes++;
  }

  removeLike(): void {
    this.likes--;
  }

  like(picType: PicType): void {
    if (picType === 'like') {
      this.addLike();
    } else if (picType === 'dislike') {
      this.removeLike();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): Pic {
    this.setLocation(location);
    return this;
  }
}
