Discourse.DiscoveryRoute.reopen({
  beforeModel: function(transition) {
    // to ensure that when discovery route is handling '/'
    //  it redirects to feed.root
    if (location.pathname === "/") {
      var parts = location.hostname.split('.');
      if (parts.length > 2) {
        this.transitionTo('feed.root');
      }
      else{
        this.transitionTo('welcome');
      }
      // if (transition.targetName.indexOf('discovery.latest') !== -1) {
      // if (Discourse.Mobile.mobileView) {
      //   this.transitionTo('discovery.latest');
      // } else {
      //   this.transitionTo('feed.root');

      // };
    }
  }
});
