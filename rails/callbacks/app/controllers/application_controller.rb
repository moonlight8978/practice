# frozen_string_literal: true

class ApplicationController < ActionController::API
  def data
    @data ||= []
  end

  def response_data
    render json: data, status: 200
  end
end
