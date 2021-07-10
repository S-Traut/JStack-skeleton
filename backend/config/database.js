module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'web-skeleton'),
        username: env('DATABASE_USERNAME', 'straut'),
        password: env('DATABASE_PASSWORD', 'B5ba0030@'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
