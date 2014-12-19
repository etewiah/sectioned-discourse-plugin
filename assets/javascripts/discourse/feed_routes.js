Discourse.FeedRootRoute = Discourse.Route.extend({
  model: function(params) {
    // return Discourse.GeoTopic.geoTopicsForCity('birmingham');
    var geo = params.geo || 'birmingham';
    // TODO, save server-side calculated geo locally..
    if (!geo) {
      console.log('no geo, will be expensive on server...');
    };
    var url = Discourse.getURL("/section_feed/get_for_geo");
    return Discourse.ajax(url, {
      data: {
        geo: geo
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
