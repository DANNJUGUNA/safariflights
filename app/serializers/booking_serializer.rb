class BookingSerializer < ActiveModel::Serializer
  attributes :user_id, :flight_id
  belongs_to :user
  belongs_to :flight
end
