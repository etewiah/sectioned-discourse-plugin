// redirect to root domain when attempt is made to signup or log on via subdomain
// otherwise oauth calls to google etc will fail.
require("discourse/routes/application")["default"].reopen({
  // TODO redirect to source domain after logging in or signing up
  handleShowLogin: function() {
    var self = this;
    if (Discourse.SiteSettings.enable_sso) {
      var returnPath = encodeURIComponent(window.location.pathname);
      window.location = Discourse.getURL('/session/sso?return_path=' + returnPath);
    } else {
      if (Discourse.SubdomainInfo.inSubdomain()) {
        window.location = Discourse.SubdomainInfo.rootDomainUrl() + "/login";
      } else {
        this.send('autoLogin', 'login', function() {
          Discourse.Route.showModal(self, 'login');
          self.controllerFor('login').resetForm();
        });
      }
    }
  },

  handleShowCreateAccount: function() {
    var self = this;
    if (Discourse.SubdomainInfo.inSubdomain()) {
      window.location = Discourse.SubdomainInfo.rootDomainUrl() + "/signup";
    } else {
      self.send('autoLogin', 'createAccount', function() {
        Discourse.Route.showModal(self, 'createAccount');
      });
    }
  }
});
