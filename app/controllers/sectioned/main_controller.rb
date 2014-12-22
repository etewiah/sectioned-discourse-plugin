module Sectioned
  class MainController < ApplicationController
    include CurrentUser
    # before_action :get_section_from_subdomain

    # below check seems to redirect to main domain if user not authenticated
    # before_action :ensure_logged_in, only: [:claim_section]

    # end point for routes that are only implemented client side
    # hardly gets hit though...
    # TODO - render useful serverside content for search engine etc..
    def landing
      subdomain = request.subdomain
      render json: { status: 'ok', subdomain: subdomain}
    end

    def claim_section
      return render_json_error('unauthenticated') unless current_user

      section_name = request.subdomain
       # "ed"
      # TODO - figure out r/n b/n sectionname and catname
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
      @category.topic.visible = false
      @category.topic.save

      # @category.move_to(position.to_i) if position
      render_serialized(@category, CategorySerializer)

    end
  end
end
