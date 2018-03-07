export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;

  distance?: number;
  calcPrice?(): number;
}

export class CharterFlight implements Flight {
  id: number;
  from: string;
  to: string;
  date: string;

  distance: number;

  calcPrice() {
    return this.distance / 2;
  }
}

export class ScheduledFlight implements Flight {
  id: number;
  from: string;
  to: string;
  date: string;

  distance: number;

  calcPrice() {
    return this.distance / 3;
  }
}
