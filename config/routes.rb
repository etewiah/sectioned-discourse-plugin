Sectioned::Engine.routes.draw do
  get "/section_feed/get_section_topics" => "feed#get_section_topics"
  get "/section_feed/get_for_geo" => "feed#get_for_geo"

  get '/section' => 'home#landing', :constraints => { :subdomain => /.+/ }  
  get '/feed' => 'home#landing', :constraints => { :subdomain => /.+/ }  

    # end point for routes that are only implemented client side
  # TODO - render useful serverside content for search engine etc..
  # get "/maps" => "maps#landing"
  # get "/maps/*path" => "maps#landing"
  # get "/browse" => "maps#landing"
  # get "/browse/*path" => "maps#landing"

end
