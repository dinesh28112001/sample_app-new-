class ApplicationMailer < ActionMailer::Base
  default from: "noreply@example.com"
  layout 'mailer'

  def account_activation(user)
    @greeting = "Hi"
    mail to: "to@example.org"
  end

  def password_reset(user)
    @greeting = "Hi"
    mail to: "to@example.org"
  end
end
