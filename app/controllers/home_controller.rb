class HomeController < ApplicationController
  def index
    @images = Home.all
    @home_images = Home.new
  end

  def upload_images
    @home_images = Home.new
    if @home_images.save
      @home_images.images.attach(params[:image]) if params[:image].present?
      redirect_to root_path, notice: "Images uploaded."
    else
      redirect_to root_path, alert: "Faild to upload image."
    end
  end
end
