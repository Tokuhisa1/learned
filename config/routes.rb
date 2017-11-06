Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :decks do
    resources :cards
  end

  get '/cards/:id', to: 'cards#show'

  root to: "root#index"
end
