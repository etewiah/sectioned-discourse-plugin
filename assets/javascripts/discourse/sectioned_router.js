Discourse.Route.buildRoutes(function() {
  this.resource('feed', {
    path: '/feed'
  }, function() {
    this.route('root', {
      path: '/'
    });
    // this.route('fromOneParam', {
    //   path: '/:geo'
    // });
  });
});

