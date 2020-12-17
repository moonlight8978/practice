class Tw::UsersController < ApplicationController
  def index
    @pagy, @users = pagy(User.all)
  end
end
