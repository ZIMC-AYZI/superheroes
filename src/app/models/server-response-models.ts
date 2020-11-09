import {Hero} from "./hero-card-model";

export interface ServerResponse {
  results: Hero[],
  response: string
}
