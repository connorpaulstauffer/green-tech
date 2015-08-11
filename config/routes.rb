AuthDemo::Application.routes.draw do
  root 'statics#home'

  resource :session, only: [:create, :destroy, :new]
  resource :user, only: [:create, :new, :show] do
    resource :counter, only: [:update]
  end

  get 'home' => 'statics#home'
  get 'contact' => 'statics#contact'
  get 'about' => 'statics#about'
end
