# frozen_string_literal: true

class SalesController < UsersController
  before_action :append_first, only: :index

  def index
    response_data
  end

  def show
    response_data
  end
end
