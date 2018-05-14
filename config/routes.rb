Rails.application.routes.draw do
  resources :categories
  resources :products
	devise_for :users, :controllers => {registrations: 'registrations'}
 	# resources :users
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root to: "home#index"
end
