# Followers (Observers) follow, receive notifications from Subject
module Subject
  def initialize
    # observers can receive message when a specific action is called
    @observers = []
  end

  def add_observer(observer)
    @observers << observer
  end

  def delete_observer(observer)
    @observers.delete(observer)
  end

  def notify_observers(old_data)
    @observers.each do |observer|
      observer.update(self, old_data)
    end
  end
end
