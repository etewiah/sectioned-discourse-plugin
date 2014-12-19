Discourse.FeedRootRoute = Discourse.Route.extend(Discourse.OpenComposer, {
  actions: {
    createTopic: function() {
      // debugger;
      // this.openComposer(this.controllerFor('feed/root'));
      this.openComposer(this.controller);
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
  // serialize: function(model) {
  //   return { val: 'recent' };
  // },
  setupController: function(controller, model) {
    controller.set('content', model);
  }
});
