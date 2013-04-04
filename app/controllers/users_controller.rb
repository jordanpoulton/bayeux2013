class UsersController < ApplicationController

  before_filter :authenticate_user!, :only => [:show]


  def index

  end

  def show
  end

  def draw_tiles
    @users = User.where(:lat => (params[:left].to_f)..(params[:right].to_f), :lng => (params[:bottom].to_f)..(params[:top].to_f))
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @users }
    end
  end


end
