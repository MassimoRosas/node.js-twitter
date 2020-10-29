const fs = require('fs');

module.exports = {
  dbUrl: fs.readFileSync('mongodb+srv://alex:aze@cluster0.lpnpa.gcp.mongodb.net/twitter?retryWrites=true&w=majority'),
  cert: fs.readFileSync('/etc/letsencrypt/live/www.dyma-twitter-project.site/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/www.dyma-twitter-project.site/privkey.pem'),
  portHttp: 81,
  portHttps: 443
}