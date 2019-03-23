class TopicsController < ApplicationController
  def new
    run Topic::Operation::New
  end
end
