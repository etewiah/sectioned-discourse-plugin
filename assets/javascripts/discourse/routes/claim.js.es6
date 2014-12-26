export default Discourse.Route.extend({
  beforeModel: function() {
    // if we are in TLD, do not proceed with claim route, go to welcome route instead
    if (!Discourse.SubdomainInfo.inSubdomain()) {
      this.transitionTo('welcome');
    }
  },
  model: function(params) {
    var parts = location.hostname.split('.');
    var subdomain = "";
    if (parts.length > 2) {
      subdomain = parts.shift();
    };
    // var subdomain = parts.shift();
    // var upperleveldomain = parts.join('.');
    var url = Discourse.getURL("/section_feed/get_section_topics");
    return Discourse.ajax(url, {
      data: {
        subdomain: subdomain
      }
    });
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    debugger;
    if (model && model.category) {
      controller.set('isAvailable', false);
      this.transitionTo('feed.root', model);
    } else {
      controller.set('isAvailable', true);
    }
    // if (model.category_flag === "unclaimed") {
    //   this.transitionTo('claim');
    // } else {
    //   controller.set('content', model);
    // };
  }
});
