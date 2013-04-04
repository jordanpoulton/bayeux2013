class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :get_user_for_claim_form

  def get_user_for_claim_form
    @user = User.new
  end
end
