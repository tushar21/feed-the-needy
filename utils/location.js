import { Constants, Location, Permissions } from 'expo';

export default {
    getDifference : distance,
    getCurrentLocation: getCurrentLocation
}


getCurrentLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return {error : true, message : "Access to location is not permitted"}
    }
    let locationCoords = await Location.getCurrentPositionAsync({});
    let latLong = {
      latitude : locationCoords.coords.latitude,
      longitude : locationCoords.coords.longitude
    }
    let location = await Location.reverseGeocodeAsync(latLong);
    return location;
}

function distance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295;    // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
  
    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }