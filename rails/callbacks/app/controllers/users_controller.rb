# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :append_first
  before_action :append_second
  before_action :append_third

  def index
    response_data
  end

  def append_first
    data.push('first')
  end

  def append_second
    data.push('second')
  end

  def append_third
    data.push('third')
  end
end
