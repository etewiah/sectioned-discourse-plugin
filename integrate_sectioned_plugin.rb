
module ApplicationControllerExtender
  def self.included(klass)
    # binding.pry
    klass.send(:before_filter, :get_section_from_subdomain)
    # klass.append_before_filter :get_section_from_subdomain
  end

  private

  def get_section_from_subdomain
    subdomain = request.subdomain
    # section_details = render_json_dump({
    #   "subdomain" => subdomain
    # })
binding.pry
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
