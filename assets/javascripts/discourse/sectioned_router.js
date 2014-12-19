Discourse.Route.buildRoutes(function() {
  this.resource('claim', {path: '/claim'});
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
  // Topic routes
  this.resource('sectiontopic', { path: '/topic/:slug/:id' }, function() {
    this.route('fromParams', { path: '/' });
    this.route('fromParamsNear', { path: '/:nearPost' });
  });
  this.resource('sectiontopicBySlug', { path: '/tt/:slug' });

  // this.resource('sectiontopic', {
  //   path: '/tt/:slug'
  // }, function() {
  //   this.route('item', {
  //     path: '/'
  //   });
  // });
});
