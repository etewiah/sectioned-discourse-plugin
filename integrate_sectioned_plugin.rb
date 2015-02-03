# class below moved to drive plugin
# module SectionedAuth

#   require_dependency "auth/current_user_provider"

#   class SubDomainCurrentUserProvider  < Auth::DefaultCurrentUserProvider
#     # ::AUTH_DOMAIN = Rails.env.development? ? ".lvh.me" : ".klavado.com"


#     def log_off_user(session, cookies)
#       auth_domain = @env["HTTP_ORIGIN"].split(':')[1].gsub('//','.')
#       cookies[TOKEN_COOKIE] = { value: nil, domain: auth_domain }
#     end

#     def log_on_user(user, session, cookies)
#       auth_domain = @env["HTTP_ORIGIN"].split(':')[1].gsub('//','.')
#       # Discourse.base_url.split(':')[1].gsub('//','.')
#       unless user.auth_token && user.auth_token.length == 32
#         user.auth_token = SecureRandom.hex(16)
#         user.save!
#       end
#       cookies.permanent[TOKEN_COOKIE] = { value: user.auth_token, httponly: true, domain: auth_domain }
#       make_developer_admin(user)
#       @env[CURRENT_USER_KEY] = user
#     end

#   end
# end

# Discourse.current_user_provider = SectionedAuth::SubDomainCurrentUserProvider

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
