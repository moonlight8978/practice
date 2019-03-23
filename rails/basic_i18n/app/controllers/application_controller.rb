class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_locale

protected

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  # You will not want to include this option in every URL handly like
  # link_to(artists_path(locale: I18n.locale))
  def default_url_options
    { locale: I18n.locale }
  end
end
