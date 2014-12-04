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




  Meteor.startup(function () {
    console.log("startup");
    var logToDom = function (message) {
      var e = document.createElement('label');
      e.innerText = message;

      var br = document.createElement('br');
      var br2 = document.createElement('br');
      document.body.appendChild(e);
      document.body.appendChild(br);
      document.body.appendChild(br2);

      window.scrollTo(0, window.document.height);
    };

    var delegate = new cordova.plugins.locationManager.Delegate();

    delegate.didDetermineStateForRegion = function (pluginResult) {

      logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

      cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
      + JSON.stringify(pluginResult));
    };

    delegate.didStartMonitoringForRegion = function (pluginResult) {
      console.log('didStartMonitoringForRegion:', pluginResult);

      logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
    };

    delegate.didRangeBeaconsInRegion = function (pluginResult) {
      logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
    };



    var uuid = '74278BDA-B644-4520-8F0C-720EAF059935'; // mandatory
    var identifier = 'kannan'; // mandatory
    var minor = 65505; // optional, defaults to wildcard if left empty
    var major = 65504; // optional, defaults to wildcard if left empty
    
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

    cordova.plugins.locationManager.setDelegate(delegate);

    // required in iOS 8+
    cordova.plugins.locationManager.requestWhenInUseAuthorization();
    // or cordova.plugins.locationManager.requestAlwaysAuthorization()

    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
    .fail(console.error)
    .done();


  });
}
