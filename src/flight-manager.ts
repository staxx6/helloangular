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

  // use filter
  search2(from: string,  to: string): Flight[] {
    let result: Flight[] = this.cache.filter(function(f: Flight) {
      return f.from === from && f.to === to;
    });
    return result;
  }

  // lambda
  search3(from: string, to: string): Flight[] {
    return this.cache.filter((f:Flight) => {
      return f.from === from && f.to === to;
    });
  }

  // more lambda
  search4(from: string, to: string): Flight[] {
    return this.cache.filter(f => f.from === from && f.to === to);
  }
}
