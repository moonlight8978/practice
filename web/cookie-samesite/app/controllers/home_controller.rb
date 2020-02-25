class HomeController < ApplicationController
  def index
    headers['Set-Cookie'] = "none=1; SameSite=None"
    headers['Set-Cookie'] = "lax=1; SameSite=Lax"
    headers['Set-Cookie'] = "strict=1; SameSite=Strict"
  end
end
