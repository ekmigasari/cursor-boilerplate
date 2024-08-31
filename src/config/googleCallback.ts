export const googleCallback =
  process.env.NODE_ENV === "production" ? process.env.GOOGLE_CALLBACK_URL_PROD : process.env.GOOGLE_CALLBACK_URL_DEV;
