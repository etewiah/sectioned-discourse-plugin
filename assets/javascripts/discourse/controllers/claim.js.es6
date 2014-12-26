export default Em.ObjectController.extend({
  // showLoginButton: Em.computed.equal('path', 'login'),

  // actions: {
  //   markFaqRead: function() {
  //     Discourse.ajax("/users/read-faq", { method: "POST" });
  //   }
  // }
// });
// Discourse.ClaimController = Discourse.ObjectController.extend({
  sectionName: function() {
    return Discourse.SubdomainInfo.currentSubdomain().capitalize();
  }.property(),
  actions: {
    claimSection: function() {
      if (Discourse.User.current()) {

        var url = Discourse.getURL("/claim_section");
        var result = Discourse.ajax(url, {});
        var self = this;
        result.then(function(category) {
          // TODO - test for success
          debugger;
          self.transitionToRoute('feed.root');
        })
      } else {
        this.send('showLogin');
      }

    }
  }
});
