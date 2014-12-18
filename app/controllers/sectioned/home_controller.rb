module Sectioned
  class HomeController < ApplicationController
    include CurrentUser

    # before_action :check_user, only: [:set_location]

    # end point for routes that are only implemented client side
    # TODO - render useful serverside content for search engine etc..
    def landing
      subdomain = request.subdomain
      # binding.pry
      render json: { status: 'ok', subdomain: subdomain}
    end  
  end
end
