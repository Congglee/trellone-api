import fs from 'fs'
import path from 'path'
import logger from '~/config/logger'
import { config } from 'dotenv'

const env = process.env.NODE_ENV
const envFilename = `.env.${env}`

if (!env) {
  logger.error(
    'You have not provided the NODE_ENV variable. Please provide it in the .env file. (example: NODE_ENV=development)'
  )
  logger.error(`Detect NODE_ENV = ${env}`)
  process.exit(1)
}

logger.info(`Detect NODE_ENV = ${env}, so the app will use ${envFilename} file`)

if (!fs.existsSync(path.resolve(envFilename))) {
  logger.error(`File ${envFilename} does not exist`)
  logger.error(
    `Please create a ${envFilename} file or run the app with another NODE_ENV (example: NODE_ENV=production)`
  )
  process.exit(1)
}

config({ path: envFilename })

export const environment = process.env.NODE_ENV || 'development'

export const envConfig = {
  port: (process.env.PORT as string) || '8000',
  host: (process.env.HOST as string) || 'http://localhost',

  dbName: process.env.DB_NAME as string,
  dbUsername: process.env.DB_USERNAME as string,
  dbPassword: process.env.DB_PASSWORD as string,

  dbWorkspacesCollection: process.env.DB_WORKSPACES_COLLECTION as string,
  dbBoardsCollection: process.env.DB_BOARDS_COLLECTION as string,
  dbColumnsCollection: process.env.DB_COLUMNS_COLLECTION as string,
  dbCardsCollection: process.env.DB_CARDS_COLLECTION as string,
  dbUsersCollection: process.env.DB_USERS_COLLECTION as string,
  dbRefreshTokensCollection: process.env.DB_REFRESH_TOKENS_COLLECTION as string,
  dbInvitationsCollection: process.env.DB_INVITATIONS_COLLECTION as string,

  passwordSecret: process.env.PASSWORD_SECRET as string,

  jwtSecretAccessToken: process.env.JWT_SECRET_ACCESS_TOKEN as string,
  jwtSecretRefreshToken: process.env.JWT_SECRET_REFRESH_TOKEN as string,
  jwtSecretEmailVerifyToken: process.env.JWT_SECRET_EMAIL_VERIFY_TOKEN as string,
  jwtSecretForgotPasswordToken: process.env.JWT_SECRET_FORGOT_PASSWORD_TOKEN as string,
  jwtSecretInviteToken: process.env.JWT_SECRET_INVITE_TOKEN as string,

  accessTokenExpiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
  emailVerifyTokenExpiresIn: process.env.EMAIL_VERIFY_TOKEN_EXPIRES_IN as string,
  forgotPasswordTokenExpiresIn: process.env.FORGOT_PASSWORD_TOKEN_EXPIRES_IN as string,
  inviteTokenExpiresIn: process.env.INVITE_TOKEN_EXPIRES_IN as string,

  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  googleRedirectUri: process.env.GOOGLE_REDIRECT_URI as string,
  clientRedirectCallback: process.env.CLIENT_REDIRECT_CALLBACK as string,

  clientUrl: process.env.CLIENT_URL as string,

  resendApiKey: process.env.RESEND_API_KEY as string,
  resendEmailFromAddress: process.env.RESEND_EMAIL_FROM_ADDRESS as string,

  uploadthingToken: process.env.UPLOADTHING_TOKEN as string,

  unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY as string,
  unsplashSecretKey: process.env.UNSPLASH_SECRET_KEY as string,
  unsplashApplicationId: process.env.UNSPLASH_APPLICATION_ID as string
}
