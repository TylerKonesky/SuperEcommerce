const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys')

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 10*24*60*60*100,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`App is listening on port ${PORT}`));