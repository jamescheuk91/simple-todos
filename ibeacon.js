if (Meteor.isClient) {

  createBeacon = function() {

    var uuid = '74278BDA-B644-4520-8F0C-720EAF059935'; // mandatory
    var identifier = 'kannan'; // mandatory
    var minor = 65505; // optional, defaults to wildcard if left empty
    var major = 65504; // optional, defaults to wildcard if left empty

    // throws an error if the parameters are not valid
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
    alert("locationManager.BeaconRegion works");
    return beaconRegion;
  };

  alert(createBeacon());

}
