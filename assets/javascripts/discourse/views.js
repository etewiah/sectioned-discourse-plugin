Discourse.FeedRootView = Discourse.View.extend({
  templateName: 'feed/root'
});

Discourse.ClaimView = Discourse.View.extend({
  templateName: 'claim',
  // contentBinding: 'controller.content',
});
Discourse.WelcomeView = Discourse.View.extend({
  templateName: 'welcome',
  // contentBinding: 'controller.content',
});


Discourse.ClaimModalView =  Discourse.ModalBodyView.extend({
  templateName: 'modals/claim',
  title: 'Claim this room'
});
