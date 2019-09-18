export interface Location extends google.maps.LatLngLiteral {}

// Instructions to every other class
// on how they can be argument to 'addMarker'
export interface Mappable {
  location: Location;

  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, zoom = 1, lat = 0, lng = 0) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom,
      center: {
        lat,
        lng
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
