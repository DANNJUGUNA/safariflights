class User < ApplicationRecord
    has_one :review
    has_many :bookings
    has_many :flights, through: :bookings
end
