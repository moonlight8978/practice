class AlbumsController < ApplicationController
  def new
    @album = Album.new
    5.times do
      @album.songs.new
    end
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      redirect_to albums_path
    else
      render action: :new
    end
  end

  def index
    @albums = Album.all
  end

  def edit
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])

    if @album.update(album_params)
      redirect_to albums_path
    else
      render action: :edit
    end
  end

private

  def album_params
    params.require(:album).permit(
      :title,
      songs_attributes: [:title, :id, :_destroy]
    )
  end
end
