module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c87778f0f37e2999bb5db9663650bc51'),
  },
});
