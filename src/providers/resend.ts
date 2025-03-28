import { Resend } from 'resend'
import { envConfig } from '~/config/environment'
import path from 'path'
import fs from 'fs'

const verifyEmailTemplate = fs.readFileSync(path.resolve('src/templates/verify-email.html'), 'utf-8')
const forgotPasswordTemplate = fs.readFileSync(path.resolve('src/templates/forgot-password.html'), 'utf-8')

const resend = new Resend(envConfig.resendApiKey)

const sendVerifyEmail = (toAddress: string, subject: string, body: string) => {
  return resend.emails.send({
    from: envConfig.resendEmailFromAddress,
    to: toAddress,
    subject,
    html: body
  })
}

export const sendVerifyRegisterEmail = (
  toAddress: string,
  email_verify_token: string,
  template: string = verifyEmailTemplate
) => {
  return sendVerifyEmail(
    toAddress,
    'Confirm your email address',
    template
      .replace('{{title}}', 'Account registration confirmation')
      .replace('{{content}}', `Hi ${toAddress},`)
      .replace('{{title_link}}', 'Confirm your email')
      .replace('{{link}}', `${envConfig.clientUrl}/account/verification?token=${email_verify_token}&email=${toAddress}`)
  )
}

export const sendForgotPasswordEmail = (
  toAddress: string,
  forgot_password_token: string,
  template: string = forgotPasswordTemplate
) => {
  return sendVerifyEmail(
    toAddress,
    'Reset your password',
    template
      .replace('{{title}}', 'Forgot your password?')
      .replace('{{content}}', `Hi ${toAddress},`)
      .replace('{{title_link}}', 'Reset your password')
      .replace('{{link}}', `${envConfig.clientUrl}/forgot-password/verification?token=${forgot_password_token}`)
  )
}
