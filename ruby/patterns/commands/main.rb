require_relative 'button'
require_relative 'alert_command'
require_relative 'confirm_command'
require_relative 'delete_command'

Button.new("confirm button", ConfirmCommand.new("delete x 1", "/x/1")).onclick
Button.new("alert button", AlertCommand.new("Hello")).onclick

# Composite command
d_cmd = DeleteCommand.new
d_cmd << ConfirmCommand.new("delete a 2", "/a/2")
d_cmd << AlertCommand.new("a 2 has been deleted")
Button.new("delete button", d_cmd).onclick
