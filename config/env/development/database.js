module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          host: env('DATABASE_HOST', 'eu-cdbr-west-01.cleardb.com'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'heroku_87f4e105d3668a7'),
          username: env('DATABASE_USERNAME', 'b5c96413ca9174'),
          password: env('DATABASE_PASSWORD', 'c6938fa5'),
          ssl: env.bool('DATABASE_SSL', false),
        },
        options: {}
      },
    },
  });
