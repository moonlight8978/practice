class UsersController < ApplicationController
  def index
    @users = User.all
    @users_count = @users.count
    Rails.logger.debug("hello world")
  end
end
