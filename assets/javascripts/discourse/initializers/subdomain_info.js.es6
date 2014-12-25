// pretty awesome - just placing this here causes it to be picked up
// didn't even have to add it to plugin.rb file (cos its a .es6 file)...
export
default {
  name: "subdomain-info",

  initialize: function() {
    var parts = location.hostname.split('.');
    // if subdomain of a subdomain (like mad.spain.kl.com), redirect to top level domain
    if (parts.length > 3) {
      var rootDomain = parts[parts.length - 2] + "." + parts[parts.length - 1];
      var rootUrl = window.location.protocol + "//" + rootDomain;
      window.location = rootUrl;
    }
    Discourse.SubdomainInfo = {
      rootDomainUrl: function() {
        // PreloadStore.data.section_details
        var parts = location.hostname.split('.');
        if (parts.length > 2) {
          var rootDomain = parts[parts.length - 2] + "." + parts[parts.length - 1];
          return  window.location.protocol + "//" + rootDomain;
          // return location.hostname.substr(location.hostname.indexOf('.') + 1);
        } else {
          return window.location.protocol + "//" + location.hostname;
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
      // defaultCityName: 'madrid',

    };
  }
};
