module Sectioned
  class SectionTopicItemSerializer < ApplicationSerializer
    attributes :category_id, 
      # :capability, 
      :views,
      # attributes :views,
      :like_count,
      :title,
      :excerpt,
      :archetype,
      # :last_poster_username,
      :last_posted_at,
      # :locations,
      :posts_count,
      :slug
    # :last_poster
    # :featured_users

    # has_many :posters, serializer: TopicPosterSerializer, embed: :objects
    # has_many :participants, serializer: TopicPosterSerializer, embed: :objects

    # def capability
    #   object.geo.capability
    # end

    # # def starred
    # #     object.user_data.starred?
    # # end

    # # alias :include_starred? :has_user_data

    # def posters
    #   object.posters || []
    # end

    # def last_poster_username
    #   posters.find { |poster| poster.user.id == object.last_post_user_id }.try(:user).try(:username)
    # end

    # def participants
    #   object.participants_summary || []
    # end

    # def include_participants?
    #   true
    #   # object.private_message?
    # end

  end


end
