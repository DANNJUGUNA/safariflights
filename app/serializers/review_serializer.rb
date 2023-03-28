class ReviewSerializer < ActiveModel::Serializer
  attributes :user_id, :rating
  has_one :user
end
