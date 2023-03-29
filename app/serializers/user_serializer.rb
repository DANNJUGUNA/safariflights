class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :password_digest
  has_one :review
  has_many :flights

end
