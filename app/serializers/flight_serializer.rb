class FlightSerializer < ActiveModel::Serializer
  attributes :destination, :from, :duration, :departure, :cost
  has_many :users, serializer: UserSerializer
end
