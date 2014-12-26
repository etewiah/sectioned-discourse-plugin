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
  }.property()
});
