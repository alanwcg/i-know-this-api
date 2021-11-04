export default {
  token_secret: process.env.TOKEN_SECRET || 'token',
  token_expiration: '30m',
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET || 'refresh_token',
  refresh_token_expiration: '30d',
  refresh_token_expiration_days: 30,
};
