import faker from 'faker';
import { Mappable, Location } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: Location;

  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
