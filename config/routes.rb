Sectioned::Engine.routes.draw do
  get '/section' => 'home#landing', :constraints => { :subdomain => /.+/ }  
  get '/feed' => 'home#landing', :constraints => { :subdomain => /.+/ }  

    # end point for routes that are only implemented client side
  # TODO - render useful serverside content for search engine etc..
  # get "/maps" => "maps#landing"
  # get "/maps/*path" => "maps#landing"
  # get "/browse" => "maps#landing"
  # get "/browse/*path" => "maps#landing"

end
