class User < ApplicationRecord
    has_one :review
    has_many :bookings
    has_many :flights, through: :bookings

    has_secure_password

    validates :email,presence:true, uniqueness:true
    validates :username ,presence:true,uniqueness:true 
end
