// export default Ember.Component.extend({
//   classNames: ["title"],

//   linkUrl: function() {
//     debugger;
//     return Discourse.getURL('/');
//   }.property(),

//   showSmallLogo: function() {
//     return !Discourse.Mobile.mobileView && this.get("minimized");
//   }.property("minimized"),

//   showMobileLogo: function() {
//     return Discourse.Mobile.mobileView && !Ember.isBlank(this.get('mobileBigLogoUrl'));
//   }.property(),

//   smallLogoUrl: Discourse.computed.setting('logo_small_url'),
//   bigLogoUrl: Discourse.computed.setting('logo_url'),
//   mobileBigLogoUrl: Discourse.computed.setting('mobile_logo_url'),
//   title: Discourse.computed.setting('title'),

//   click: function(e) {
//     // if they want to open in a new tab, let it so
//     if (e.shiftKey || e.metaKey || e.ctrlKey || e.which === 2) { return true; }

//     e.preventDefault();

//     Discourse.URL.routeTo('/');
//     return false;
//   }
// });

require("discourse/components/home-logo")["default"].reopen({
  sectionHeader: function() {
    return Discourse.SubdomainInfo.currentSubdomain().capitalize();
  }.property(),
  inRootDomain: function() {
    return !Discourse.SubdomainInfo.inSubdomain();

    //     if (Discourse.SubdomainInfo.inSubdomain()) {

    // debugger;
    // return Discourse.getURL('/');
  }.property(),

});