Discourse.ClaimController = Discourse.ObjectController.extend({
  actions: {
    claimSection: function() {
      debugger;
      var url = Discourse.getURL("/claim_section");
      var result = Discourse.ajax(url, {});
      var self = this;
      result.then(function(category){
      	debugger;
      	self.transitionToRoute('feed.root');
      })
    }
  }
});
