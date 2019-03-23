class RoomsController < ApplicationController
  def create
    @room = Room.create
    redirect_to action: :show, id: @room.id
  end

  def show
    @room = Room.find(params[:id])
    current_user.update(room: @room)
  end
end
