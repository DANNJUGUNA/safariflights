class User < ApplicationRecord
    VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
    MAX_EMAIL_LENGTH = 255

    has_one :review
    has_many :bookings
    has_many :flights, through: :bookings

    has_secure_password

    validates :email, presence: true, uniqueness: { case_sensitive: false}, length: { maximum: MAX_EMAIL_LENGTH }, format: { with: VALID_EMAIL_REGEX}
    validates :username, presence: true, uniqueness: true, length: { minimum: 2 }
    validates :password_digest, presence: true, length: { in: 6..20 }, if: -> { password_digest.present? }
    validates :password_confirmation, presence: true, on: :create

    before_save :to_lowercase

    private

    def to_lowercase
        email.downcase!
    end
end
