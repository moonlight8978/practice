class StrongParametersBuilder
  attr_reader :params, :constraints, :modify_params

  def initialize(params, constraints, &modify_params)
    @params = params.merge({})
    @constraints = constraints
    @modify_params = modify_params if block_given?
  end

  def perform
    modify_params.call(params) if modify_params

    permitted_attributes = []
    constraints.each do |constraint|
      if constraint.is_a?(Array)
        attribute, condition = constraint
        permitted_attributes << attribute if condition.call(params)
      else
        attribute = constraint
        permitted_attributes << attribute
      end
    end

    rails_params =
      if params.is_a?(ActionController::Parameters)
        params
      else
        ActionController::Parameters.new(params)
      end
    rails_params.permit(permitted_attributes)
  end
end
