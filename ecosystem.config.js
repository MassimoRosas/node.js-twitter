module.exports = {
  apps : [{
    name: 'twitter',
    instances: 'max',
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }, {
    script: './bin/www',
    watch: true,
  }],
};
