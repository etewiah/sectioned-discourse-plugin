export default Discourse.Route.extend(Discourse.OpenComposer, {
  // Discourse.FeedRootRoute = Discourse.Route.extend(Discourse.OpenComposer, {
  beforeModel: function(transition) {
    if (!Discourse.SubdomainInfo.inSubdomain()) {
      this.transitionTo('welcome');
    }
  },
  actions: {
    createTopic: function() {
      // this.openComposer(this.controllerFor('feed/root'));
      // this.openComposer(this.controller);

      // this.controllerFor('composer').open({
      //   categoryId: controller.get('category.id'),
      //   action: Discourse.Composer.CREATE_TOPIC,
      //   draftKey: controller.get('draft_key'),
      //   draftSequence: controller.get('draft_sequence')
      // });

      if (Discourse.User.current()) {

        var composerController = this.controllerFor('composer');
        // this.get('controllers.composer');
        var self = this;
        composerController.open({
          categoryId: this.controller.get('content.category.id'),
          action: Discourse.Composer.CREATE_TOPIC,
          draftKey: "new_topic",
          draftSequence: 1
        }).then(function() {
          debugger;
          // composerController.appendText('slightly longer ...New event weee');
          // as this is about no gig in particular...:
          // composerController.content.set('gig', {
          //   id: 0
          // });
        });
      } else {
        this.send('showLogin');
      }
    }
  },
  model: function(params) {
    var parts = location.hostname.split('.');
    var subdomain = "";
    if (parts.length > 2) {
      subdomain = parts.shift();
    };
    // var subdomain = parts.shift();
    // var upperleveldomain = parts.join('.');
    var url = Discourse.getURL("/section_feed/get_section_topics");
    return Discourse.ajax(url, {
      data: {
        subdomain: subdomain
      }
    });
  },
  setupController: function(controller, model) {
    debugger;
    if (model.category && model.category.name) {
      $(document).attr('title', model.category.name);
      controller.set('content', model);
      if (model.category.topic_count === 0) {
        controller.set('noTopics', true);
        // controller.set('sectionName', Discourse.SubdomainInfo.currentSubdomain().capitalize());
      };
    } else {
      this.transitionTo('claim');
    }
  }
});
