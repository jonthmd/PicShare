export class Pic {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public likes: number,
  ) {}

  addLike(): void {
    this.likes++;
  }

  removeLike(): void {
    this.likes--;
  }
}
