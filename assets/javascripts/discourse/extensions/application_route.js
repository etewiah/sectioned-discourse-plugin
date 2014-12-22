require("discourse/routes/application")["default"].reopen({
  handleShowLogin: function() {
    var self = this;
debugger;
    if(Discourse.SiteSettings.enable_sso) {
      var returnPath = encodeURIComponent(window.location.pathname);
      window.location = Discourse.getURL('/session/sso?return_path=' + returnPath);
    } else {
      this.send('autoLogin', 'login', function(){
        Discourse.Route.showModal(self, 'login');
        self.controllerFor('login').resetForm();
      });
    }
  },

  handleShowCreateAccount: function() {
    var self = this;
debugger;
    self.send('autoLogin', 'createAccount', function(){
      Discourse.Route.showModal(self, 'createAccount');
    });
  }
});
