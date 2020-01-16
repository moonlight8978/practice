# frozen_string_literal: true

class AdminsController < UsersController
  skip_before_action :append_second, only: :show

  def index
    response_data
  end

  def show
    response_data
  end
end
