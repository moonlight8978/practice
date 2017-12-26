require_relative 'user'
require_relative 'user_decorator'

user = User.new(first_name: 'Tokuda', last_name: 'Shigeo', gender: :male)
user_decorator = user.decorate
puts "Full name: #{user_decorator.full_name}"
puts "Name with honorific: #{user_decorator.name_with_honorific}"
