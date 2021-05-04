module.exports = ({ env }) => ({
    url: env('HEROKU_URL'),
    admin: {
        auth: {
          secret: env('ADMIN_JWT_SECRET', '688cb0beb29d8c239ed50b1d4330d16a'),
        },
      },
  });