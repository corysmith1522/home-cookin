class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone_number, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :orders, dependent: :destroy
end
