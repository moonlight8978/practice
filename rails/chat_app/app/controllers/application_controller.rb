class ApplicationController < ActionController::Base
  def user_signed_in?
    !session[:user_id].nil?
  end

  def current_user
    return nil unless user_signed_in?
    User.find(session[:user_id])
  end

  helper_method :user_signed_in?, :current_user
end
