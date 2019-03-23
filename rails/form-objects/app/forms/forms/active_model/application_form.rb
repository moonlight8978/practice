class Forms::ActiveModel::ApplicationForm
  include ActiveModel::AttributeAssignment
  include ActiveModel::Model
  include ActiveModel::Translation
  include ActiveModel::Validations

  attr_reader :resource

  def initialize(**attrs)
    id = attrs[:id]
    if id
      @resource = block_given? ? yield(id) : resource_class.find(id)
      assign_attributes(init_attributes.merge(attrs.except(:id)))
    else
      super(attrs)
    end
  end

  def init_attributes
    resource.attributes.slice!('created_at', 'updated_at')
  end

  def resource_class
    raise 'You need to defined resource class'
  end
end