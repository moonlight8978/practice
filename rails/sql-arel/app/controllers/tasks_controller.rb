class TasksController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    tasks = @user.tasks.sort_view
    @pagy, _ = pagy(tasks.unscope(:order))
    @tasks = pagy_get_items(tasks, @pagy)
  end
end
