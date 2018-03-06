import { Flight } from './flight';

export class FlightManager {
  //private cache: Flight[];

  constructor(
    private cache: Flight[]
  ) {
    //this.cache = cache; ^- suger
  }

  search(from: string, to: string): Flight[] {
    let result = new Array<Flight>();
    for(let f of this.cache) {
      if(f.from === from && f.to === to) {
        result.push(f);
      }
    }
    return result;
  }
}
