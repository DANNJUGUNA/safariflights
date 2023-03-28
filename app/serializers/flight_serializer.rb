class FlightSerializer < ActiveModel::Serializer
  attributes :id,:destination,:from,:duration,:departure,:cost
end
