class UsersController < ApplicationController
  def index
    @users = User.all
    @users_count = @users.count
  end
end
