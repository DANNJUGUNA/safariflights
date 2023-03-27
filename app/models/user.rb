class User < ApplicationRecord
    has_many :bookings
    has_many :flights, through: :bookings
end
