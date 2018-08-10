# Followers (Observers) follow, receive notifications from Subject
module Subject
  def initialize
    # observers can receive message when a specific action is called
    @observers = []
  end

  # Use a block instead of an object
  def add_observer(&observer)
    @observers << observer
  end

  def delete_observer(observer)
    @observers.delete(observer)
  end

  def notify_observers(old_datas)
    @observers.each do |observer|
      observer.call(self, old_datas)
    end
  end
end
