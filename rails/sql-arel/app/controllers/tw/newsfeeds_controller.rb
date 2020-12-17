class Tw::NewsfeedsController < ApplicationController
  def index
    @pagy, @newsfeeds = pagy(User.find(params[:user_id]).newsfeeds)
    @newsfeeds = @newsfeeds.preload_newsfeeds
  end
end
