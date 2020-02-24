class HomeController < ApplicationController
  def index
    headers['Set-Cookie'] = ""
  end
end
