module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'us-cdbr-east-05.cleardb.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'heroku_ae8279a2551dbfd'),
        username: env('DATABASE_USERNAME', 'b487d79fefdbf7'),
        password: env('DATABASE_PASSWORD', '9e76ebae'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
