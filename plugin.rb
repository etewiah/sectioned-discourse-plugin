# name: Sectioned
# about: Klavado's Sectioned plugin for Discourse
# version: 0.1
# authors: Ed Tewiah

# load the engine
load File.expand_path('../lib/sectioned/engine.rb', __FILE__)
# gem 'geocoder', '1.2.4'
# if Rails.env == "development" || Rails.env == "test"
#   gem 'vcr', '2.9.3'
# end


# register_asset "javascripts/router.js"
register_asset "javascripts/discourse/views.js"
register_asset "javascripts/discourse/templates/welcome.js.handlebars"
register_asset "javascripts/discourse/templates/claim.js.handlebars"
register_asset "javascripts/discourse/components/home-logo.js"
register_asset "javascripts/discourse/templates/components/home-logo.js.handlebars"
# register_asset "javascripts/discourse/feed_routes.js"
register_asset "javascripts/discourse/feed_controllers.js"
register_asset "javascripts/discourse/templates/feed/root.js.handlebars"
register_asset "javascripts/discourse/sectioned_router.js"
register_asset "javascripts/discourse/extensions/discovery_route.js"
register_asset "javascripts/discourse/extensions/application_route.js"

register_asset "stylesheets/sectioned_common.scss"
register_asset "stylesheets/welcome.scss"
# register_asset "stylesheets/pickaday.css"
# register_asset "stylesheets/timepicker.css"

# And mount the engine
Discourse::Application.routes.append do
  mount Sectioned::Engine, at: '/'
end

after_initialize do
  require_dependency File.expand_path('../integrate_sectioned_plugin.rb', __FILE__)
  # load File.expand_path("../app/jobs/sectioned/update_categories.rb", __FILE__)
  # load File.expand_path("../app/jobs/sectioned/corrections.rb", __FILE__)

# below did not work:
  # Auth::DefaultCurrentUserProvider.class_eval do
  #   def log_off_user(session, cookies)
  #     binding.pry
  #     cookies[TOKEN_COOKIE] = { value: nil, domain: ".lvh.me" }
  #   end
  # end
end
