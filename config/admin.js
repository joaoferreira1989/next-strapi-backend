module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd69e4e39110dc71338810d8dd23d914a'),
  },
});
