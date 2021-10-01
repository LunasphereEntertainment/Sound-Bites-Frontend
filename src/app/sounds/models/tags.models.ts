export class Tag {
  id: number | undefined;
  tag: string;

  constructor(tag: string, id?: number) {
    this.tag = tag;

    if (id)
      this.id = id;
  }
}
