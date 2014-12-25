export default Discourse.Route.extend({
  beforeModel: function() {
    if (!Discourse.SubdomainInfo.inSubdomain()) {
      this.transitionTo('welcome');
    }
  },
});
