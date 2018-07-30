Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  mount ActionCable.server => '/cable'
  root 'hello_angular#index'
  get 'hello_angular/index'
  get 'hello_angular/name'
end
