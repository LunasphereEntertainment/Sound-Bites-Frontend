export class Sound {
  // @ts-ignore
  id: number;
  quote: string;
  plays: number;

  constructor(quote: string) {
    this.quote = quote;
    this.plays = 0;
  }
}
