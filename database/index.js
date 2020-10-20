const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alex:aze@cluster0.lpnpa.gcp.mongodb.net/twitter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
        .then(() => console.log('Connexion DB OK !'))
        .catch( err => console.log(err))