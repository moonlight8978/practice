class Forms::ActiveModel::UserForm < Forms::ActiveModel::ApplicationForm
  include ActiveModel::Model
  include ActiveModel::Validations
  include ActiveModel::Translation

  attr_accessor(
    :id,
    :username,
    :fullname,
    # :password,
    # :password_confirmation,
    :gender,
  )

  validates :username, presence: true
  validates :fullname, presence: true
  # validates :password, presence: true, confirmation: true
  # validates :password_confirmation, presence: true
  validates :gender, presence: true
  validates :gender, allow_blank: true, inclusion: { in: User.genders.keys }

  def resource_class
    User
  end

  def init_attributes
    super.slice!('password_digest')
  end
end