require_relative 'subject'

class Album
  include Subject

  attr_reader :title

  def initialize(title)
    super()
    @title = title
  end

  def update(**attributes)
    old_data = self.dup
    attributes.each do |prop, value|
      instance_variable_set(:"@#{prop}", value)
    end
    notify_observers(old_data)
  end
end
