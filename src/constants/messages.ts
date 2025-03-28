export const COMMON_MESSAGES = {
  VALIDATION_ERROR: 'Validation error'
}

export const AUTH_MESSAGES = {
  EMAIL_IS_INVALID: 'Email is invalid',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_BETWEEN_6_AND_50: 'Password length must be between 6 and 50 characters',
  PASSWORD_MUST_BE_STRONG:
    'Password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_BETWEEN_6_AND_50: 'Confirm password length must be between 6 and 50 characters',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',

  REGISTER_SUCCESS: 'Register successfully, please check your email to verify your account',

  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',

  LOGIN_SUCCESS: 'Login successfully',

  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',

  LOGOUT_SUCCESS: 'Logout successfully',

  REFRESH_TOKEN_SUCCESS: 'Refresh token successfully',

  EMAIL_VERIFY_TOKEN_IS_REQUIRED: 'Email verify token is required',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',

  EMAIL_VERIFY_SUCCESS: 'Email verify successfully',

  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',

  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password token is required',
  INVALID_FORGOT_PASSWORD_TOKEN: 'Invalid forgot password token',

  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password successfully',

  RESET_PASSWORD_SUCCESS: 'Reset password successfully',

  GMAIL_NOT_VERIFIED: 'Gmail not verified'
}

export const USERS_MESSAGES = {
  GET_ME_SUCCESS: 'Get my profile successfully'
}

export const BOARDS_MESSAGES = {
  BOARD_TITLE_IS_REQUIRED: 'Board title is required',
  BOARD_TITLE_MUST_BE_STRING: 'Board title must be a string',
  BOARD_TITLE_LENGTH_MUST_BE_BETWEEN_3_AND_50: 'Board title length must be between 3 and 50 characters',
  BOARD_DESCRIPTION_MUST_BE_STRING: 'Board description must be a string',
  BOARD_DESCRIPTION_MUST_BE_BETWEEN_3_AND_256: 'Board description must be between 3 and 256 characters',
  BOARD_TYPE_MUST_BE_PUBLIC_OR_PRIVATE: 'Board type must be public or private',

  CREATE_BOARD_SUCCESS: 'Board created successfully',

  INVALID_BOARD_ID: 'Invalid board id',
  BOARD_NOT_FOUND: 'Board not found',

  GET_BOARD_SUCCESS: 'Get board successfully',

  COLUMN_ORDER_IDS_MUST_BE_AN_ARRAY: 'Column order ids must be an array of strings',
  COLUMN_ORDER_IDS_CANNOT_BE_EMPTY: 'Column order ids cannot be empty',
  INVALID_COLUMN_ID: 'Invalid column id',

  UPDATE_BOARD_SUCCESS: 'Board updated successfully',

  CURRENT_CARD_ID_IS_REQUIRED: 'Current card id is required',
  CURRENT_CARD_ID_MUST_BE_STRING: 'Current card id must be a string',
  INVALID_CARD_ID: 'Invalid card id',
  CARD_NOT_FOUND: 'Card not found',
  PREV_COLUMN_ID_IS_REQUIRED: 'Previous column id is required',
  PREV_COLUMN_ID_MUST_BE_STRING: 'Previous column id must be a string',
  COLUMN_NOT_FOUND: 'Column not found',
  PREV_CARD_ORDER_IDS_MUST_BE_AN_ARRAY: 'Previous card order ids must be an array of strings',
  PREV_CARD_ORDER_IDS_CANNOT_BE_EMPTY: 'Previous card order ids cannot be empty',
  NEXT_COLUMN_ID_IS_REQUIRED: 'Next column id is required',
  NEXT_COLUMN_ID_MUST_BE_STRING: 'Next column id must be a string',
  NEXT_CARD_ORDER_IDS_MUST_BE_AN_ARRAY: 'Next card order ids must be an array of strings',
  NEXT_CARD_ORDER_IDS_CANNOT_BE_EMPTY: 'Next card order ids cannot be empty',

  MOVE_CARD_TO_DIFFERENT_COLUMN_SUCCESS: 'Move card to different column successfully'
}

export const COLUMNS_MESSAGES = {
  COLUMN_TITLE_IS_REQUIRED: 'Column title is required',
  COLUMN_TITLE_MUST_BE_STRING: 'Column title must be a string',
  COLUMN_TITLE_LENGTH_MUST_BE_BETWEEN_3_AND_50: 'Column title length must be between 3 and 50 characters',
  BOARD_ID_IS_REQUIRED: 'Board id is required',
  BOARD_ID_MUST_BE_STRING: 'Board id must be a string',
  INVALID_BOARD_ID: 'Invalid board id',
  BOARD_NOT_FOUND: 'Board not found',

  CREATE_COLUMN_SUCCESS: 'Column created successfully',

  INVALID_COLUMN_ID: 'Invalid column id',
  COLUMN_NOT_FOUND: 'Column not found',
  CARD_ORDER_IDS_MUST_BE_AN_ARRAY: 'Card order ids must be an array of strings',
  CARD_ORDER_IDS_CANNOT_BE_EMPTY: 'Card order ids cannot be empty',
  INVALID_CARD_ID: 'Invalid card id',

  UPDATE_COLUMN_SUCCESS: 'Column updated successfully',

  DELETE_COLUMN_SUCCESS: 'Column deleted successfully'
}

export const CARDS_MESSAGES = {
  CARD_TITLE_IS_REQUIRED: 'Card title is required',
  CARD_TITLE_MUST_BE_STRING: 'Card title must be a string',
  CARD_TITLE_LENGTH_MUST_BE_BETWEEN_3_AND_50: 'Card title length must be between 3 and 50 characters',
  BOARD_ID_IS_REQUIRED: 'Board id is required',
  BOARD_ID_MUST_BE_STRING: 'Board id must be a string',
  INVALID_BOARD_ID: 'Invalid board id',
  BOARD_NOT_FOUND: 'Board not found',
  COLUMN_ID_IS_REQUIRED: 'Column id is required',
  COLUMN_ID_MUST_BE_STRING: 'Column id must be a string',
  INVALID_COLUMN_ID: 'Invalid column id',
  COLUMN_NOT_FOUND: 'Column not found',

  CREATE_CARD_SUCCESS: 'Card created successfully'
}
