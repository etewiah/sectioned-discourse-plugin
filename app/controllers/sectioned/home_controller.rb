module Sectioned
  class HomeController < ApplicationController
    include CurrentUser
    before_action :get_section_from_subdomain
    # before_action :check_user, only: [:set_location]

    # end point for routes that are only implemented client side
    # TODO - render useful serverside content for search engine etc..
    def landing
      binding.pry
      subdomain = request.subdomain
      # binding.pry
      render json: { status: 'ok', subdomain: subdomain}
    end  
  end
end
