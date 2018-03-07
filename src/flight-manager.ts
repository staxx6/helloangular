import { Flight, ScheduledFlight, CharterFlight } from './flight';

export class FlightManager {
  //private cache: Flight[];

  constructor(
    private cache: Flight[]
  ) {
    //this.cache = cache; ^- suger

    let sf: Flight = new ScheduledFlight();
    sf.distance = 1000;

    let cf: Flight = new CharterFlight();
    cf.distance = 1000;

    let flights: Flight[] = [sf, cf];

    for(let f of flights) {
      if(f.calcPrice) {
        console.log('Preis', f.calcPrice());
      }
    }
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
