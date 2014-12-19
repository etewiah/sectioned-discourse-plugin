Sectioned::Engine.routes.draw do
  get "/section_feed/get_section_topics" => "feed#get_section_topics"
  get "/section_feed/get_for_geo" => "feed#get_for_geo"

  get '/section' => 'main#landing', :constraints => { :subdomain => /.+/ }  
  get '/feed' => 'main#landing', :constraints => { :subdomain => /.+/ }  
  get '/claim' => 'main#landing', :constraints => { :subdomain => /.+/ }  

  # TODO - make below a post
  get '/claim_section' => 'main#claim_section', :constraints => { :subdomain => /.+/ }  

    # end point for routes that are only implemented client side
  # TODO - render useful serverside content for search engine etc..
  # get "/maps" => "maps#landing"
  # get "/maps/*path" => "maps#landing"
  # get "/browse" => "maps#landing"
  # get "/browse/*path" => "maps#landing"

end
