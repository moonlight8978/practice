class CompaniesController < ApplicationController
  def index
    @pagy, @companies = pagy(Company.with_counts)
  end
end
