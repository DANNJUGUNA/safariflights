class FlightSerializer < ActiveModel::Serializer
  attributes :destination,:from,:duration,:departure,:cost
end
