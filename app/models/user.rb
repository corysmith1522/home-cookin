class User < ApplicationRecord
  has_secure_password
  before_save :normalize_phone

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone_number, phone: true, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  has_many :orders, dependent: :destroy

  def formatted_phone
    parsed_phone = Phonelib.parse(phone)
    return phone if parsed.phone.invalid?

    formatted = 
      if parsed_phone.country_code == "1"
        parsed_phone.full_national
      else
        parsed_phone.full_international
      end
    formatted.gsub!(";", "x")
    formatted
  end

  private

  def normalize_phone
    self.phone = Phonelib.parse(phone).full_e164.presence
  end
end
