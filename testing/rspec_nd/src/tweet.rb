class Tweet
  attr_accessor :content, :user

  def initialize(**args)
    @content = args[:content]
    @user = args[:user]
  end

  def format
    return nil if invalid?
    "#{user} said: \"#{content}\""
  end

  def valid?
    !invalid?
  end

  def invalid?
    content.nil? || user.nil?
  end
end
