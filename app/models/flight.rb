class Flight < ApplicationRecord
    has_many :users
    has_many :flights, through: :bookings
end
