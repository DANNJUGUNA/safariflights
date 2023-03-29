class FlightSerializer < ActiveModel::Serializer
  attributes :id,:destination, :from, :duration, :departure, :cost
  has_many :users, serializer: UserSerializer
end
