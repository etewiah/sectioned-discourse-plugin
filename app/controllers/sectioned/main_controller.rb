module Sectioned
  class MainController < ApplicationController
    include CurrentUser
    # before_action :get_section_from_subdomain
    # before_action :ensure_logged_in, only: [:claim_section]

    # end point for routes that are only implemented client side
    # TODO - render useful serverside content for search engine etc..
    def landing
      binding.pry
      subdomain = request.subdomain
      # binding.pry
      render json: { status: 'ok', subdomain: subdomain}
    end

    def claim_section
      section_name = "ed"
      # TODO - figure out r/n b/n sectionname and catname
      binding.pry
      # guardian.ensure_can_create!(Category)

      # position = category_params.delete(:position)

      # @category = Category.create(category_params.merge(user: current_user))

      @category = Category.where(:name => section_name).first_or_initialize
      unless @category.user
        @category.user_id = User.first.id
        # current_user.id
        # if color
        #   @category.color = color
        # end
      end
      return render_json_error(@category) unless @category.save

      # @category.move_to(position.to_i) if position
      render_serialized(@category, CategorySerializer)

    end
  end
end
