class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post
      .with_attached_images
      .with_attached_cover
      .find_by(id: params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.save
    if @post.errors.any?
      render :new
    else
      redirect_to({ action: :index }, notice: 'Post was successfully created!')
    end
  end

private

  def post_params
    params.require(:post).permit(
      :title, :content, :cover, images: []
    )
  end
end
