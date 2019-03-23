class UsersController < ApplicationController
  def index
    # Test query caching
    user1 = User.find(1)
    user2 = User.find(1)
  end
end
