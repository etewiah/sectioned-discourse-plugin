module SectionedAuth

  require_dependency "auth/current_user_provider"

  class SubDomainCurrentUserProvider  < Auth::DefaultCurrentUserProvider
    ::AUTH_DOMAIN = Rails.env.development? ? ".lvh.me" : ".klavado.com"


    def log_off_user(session, cookies)
      cookies[TOKEN_COOKIE] = { value: nil, domain: ::AUTH_DOMAIN }
    end

    def log_on_user(user, session, cookies)

      unless user.auth_token && user.auth_token.length == 32
        user.auth_token = SecureRandom.hex(16)
        user.save!
      end
      cookies.permanent[TOKEN_COOKIE] = { value: user.auth_token, httponly: true, domain: ::AUTH_DOMAIN }
      make_developer_admin(user)
      @env[CURRENT_USER_KEY] = user
    end

  end
end

Discourse.current_user_provider = SectionedAuth::SubDomainCurrentUserProvider

module ApplicationControllerExtender
  def self.included(klass)
    klass.send(:before_filter, :get_section_from_subdomain)
    # klass.append_before_filter :get_section_from_subdomain
  end

  private

  def get_section_from_subdomain
    subdomain = request.subdomain
    # section_details = render_json_dump({
    #   "subdomain" => subdomain
    # })
    section_details = {
      "subdomain" => subdomain
    }
    @preloaded ||= {}
    @preloaded["section_details"] = section_details.to_json
    # store_preloaded("section_details", section_details)
  end
end
ApplicationController.send(:include, ApplicationControllerExtender)

# # add location to the posts
# module LocationPostExtender
#   def self.included(klass)
#     klass.has_one :location_post, class_name: "::MapTopic::LocationPost"
#     klass.has_one :location, through: :location_post, class_name: "::MapTopic::Location"

#     # 7 oct 2014: will allow multiple locations per post - will phase above out once data has been migrated
#     # for now, UI will only allow selection of 1 location per post - this might change in future
#     # locationPost has to have a corresponding LocationTopic
#     klass.has_many :post_locations, class_name: "::MapTopic::LocationPost"
#     klass.has_many :locations, through: :post_locations, class_name: "::MapTopic::Location"


#     # , autosave: true, class_name: "::Tagger::Tag"
#   end
# end
# Post.send(:include, LocationPostExtender)

# # add the location to the post serializer
# module ExtendPostSerializerForLocationTopic
#   def self.included(klass)
#     klass.attributes :location
#     # below seemed to create a 'circular dependency' error when loading categories.json
#     # klass.attributes :locations
#   end
#   #
#   def location
#     ::MapTopic::LocationSummarySerializer.new( object.location, root: false )
#   end


# end

# PostSerializer.send(:include, ExtendPostSerializerForLocationTopic)
