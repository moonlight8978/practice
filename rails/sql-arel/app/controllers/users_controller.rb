class UsersController < ApplicationController
  def index
    company = Company.find(params[:company_id])
    @pagy, @users = pagy(company.users.sort_view)
  end
end
