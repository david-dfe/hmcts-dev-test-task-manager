Rails.application.routes.draw do
  # Health check route (already present)
  get "up" => "rails/health#show", as: :rails_health_check

  # API routes for tasks
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
