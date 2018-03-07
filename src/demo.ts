import { Flight } from './flight';
import { FlightManager } from './flight-manager';

let flights: Array<Flight> = [
  {
    id: 17,
    from: 'gaz',
    to: 'hamburg',
    date: '2017-02-27'
  },
  {
    id: 18,
    from: 'gaz',
    to: 'hamburg',
    date: '2017-02-27'
  },
  {
    id: 19,
    from: 'gaz',
    to: 'mallorca',
    date: '2017-02-27'
  },
  {
    id: 20,
    from: 'gaz',
    to: 'hamburg',
    date: '2017-02-27'
  },
];

let fm = new FlightManager(flights);
let result1 = fm.search('gaz', 'hamburg');

for(let f of result1) {
  console.log('flight', f);
}


// --------------------------------------------------
