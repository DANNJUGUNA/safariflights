class Booking < ApplicationRecord
  belongs_to :flight_id
  belongs_to :user_id
end
