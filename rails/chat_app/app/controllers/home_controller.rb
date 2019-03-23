class HomeController < ApplicationController
  def index
    redirect_to action: :welcome unless user_signed_in?
    @rooms = Room.all
  end

  def welcome
    #code
  end
end
