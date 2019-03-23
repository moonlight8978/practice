require_relative 'subject'

class Album
  include Subject

  attr_reader :title

  def initialize(title)
    super()
    @title = title
  end

  def update(**attributes)
    # #dup produces a shallow copy, #dup will not copy modules that the object extends
    # #clone duplicates object including internal state
    old_data = self.dup

    attributes.each do |prop, value|
      instance_variable_set(:"@#{prop}", value)
    end

    # after update, send message to observers
    notify_observers(old_data)
  end
end
