// pretty awesome - just placing this here causes it to be picked up
// didn't even have to add it to plugin.rb file (cos its a .es6 file)...
export
default {
  name: "subdomain-info",

  initialize: function() {
    debugger;
    Discourse.SubdomainInfo = {
      var parts = location.hostname.split('.');
      if(parts.length > 3){
        debugger; 
        var rootDomain = parts[parts.length - 2] + "." + parts[parts.length - 1];
        var rootUrl = window.location.protocol + "//" + rootDomain;
        window.location = rootUrl;
      }

      rootDomain: function() {
          // PreloadStore.data.section_details
          var parts = location.hostname.split('.');
          if (parts.length > 2) {
            var rootDomain = parts[parts.length - 2] + "." + parts[parts.length - 1];
            return rootDomain;
            // return location.hostname.substr(location.hostname.indexOf('.') + 1);
          } else {
            return location.hostname;
          }
        },
        currentSubdomain: function() {
          // PreloadStore.data.section_details
          var parts = location.hostname.split('.');
          if (parts.length > 2) {
            return parts[0];
          } else {
            return "";
          }
        },
        inSubdomain: function() {
          // PreloadStore.data.section_details
          var parts = location.hostname.split('.');
          if (parts.length > 2) {
            return true;
          } else {
            return false;
          }
        },
        // TODO - allow configuration of these values from an admin page
        // showLocationsPreview: true,
        // defaultCity: {
        //   city_name: "madrid",
        //   longitude: "-3.7037902",
        //   latitude: "40.4167754",
        //   country: "Spain",
        // },
        defaultCityName: 'madrid',

    };
  }
};
