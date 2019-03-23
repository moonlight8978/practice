class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def create
    @artist = Artist.create(artist_params)

    unless @artist.errors.any?
      redirect_to artist_path(@artist)
    else
      render action: :new, status: :bad_request
    end
  end

  def show
    begin
      @artist = Artist.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      head :bad_request
    end
  end

  def new
    @artist = Artist.new
  end

  def edit
    @artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update(artist_params)
    if @artist.errors.any?
      render :edit
    else
      redirect_to artists_path
    end
  end

private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
