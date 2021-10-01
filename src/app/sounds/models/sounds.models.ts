import {Tag} from "./tags.models";

export class Sound {
  // @ts-ignore
  id: number;
  quote: string;
  plays: number;
  tags: Tag[];

  constructor(quote: string) {
    this.quote = quote;
    this.plays = 0;
    this.tags = [];
  }
}
