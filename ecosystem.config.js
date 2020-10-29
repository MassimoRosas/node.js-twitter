module.exports = {
  apps : [{
    name: 'twitter',
    instances: 'max',
    autorestart: true,
    script: './bin/www',
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
