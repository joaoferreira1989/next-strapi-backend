module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'dj_events_backend'),
      user: env('DATABASE_USERNAME', 'sendines'),
      password: env('DATABASE_PASSWORD', 'sendines89'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
