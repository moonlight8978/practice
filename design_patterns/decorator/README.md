### Decorator Pattern

We have an `User` class, with some attributes.<br>

```ruby
class User
  # ...
end
```

We want to add more responsibilities (view or domain related) to our `User`, but it would quickly become fat with huge amount of methods.

So, we will create a new class that wrap the original `@user` object called `UserDecorator`, it has the same interface as `User`. We can extend stdlib's `Forwardable` module in order to delegate methods to `@user` to save our precious time.

Now let's implement more responsibilities to our `User`.

```ruby
class UserDecorator
  def initialize(user)
    @user = user
  end

  # ...
end
```
