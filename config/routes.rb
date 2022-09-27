Rails.application.routes.draw do
  resources :artworks
  resources :cowries
  resources :nfts
  resources :tutorials
  resources :collections
  resources :investments
  resources :admins
  resources :users
  # Routing logic: fallback requests for React Router.
  post "/signup", to: "users#create"
  get "/me", to: "user#show"
  post "/login", to: "sessions#create"
  delete "/logout", to:"sessions#destroy"
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
