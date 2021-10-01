import {Sound} from "./sounds.models";

export class Collection {
  id: number | undefined;
  name: string | undefined;
  owner: number | undefined;
  sounds: Sound[] | undefined;
}
