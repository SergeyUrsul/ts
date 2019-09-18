import { User } from './User';
import { Company } from './Company';
import { CustomMap, Mappable } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

//customMap.addMarker(user);
//customMap.addMarker(company);

const markers: Mappable[] = [user, company];
markers.forEach(marker => {
  customMap.addMarker(marker);
});
