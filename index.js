// express and nunjucks templating
const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express();

// dev environment
const isDev = app.get('env') === 'development';

// couchdb
var nano = require('nano')('http://localhost:5984');

// settings
var settings = {};
settings.ALLOW_LOGIN = true;
settings.HTML_ONLY = true;
settings.DOMAIN = 'localhost';
settings.EMAIL = 'happiness@heavenvy.com'
settings.COUCHDB_PREFIX = 'heavenvy_';
settings.LOCAL = true;
settings.PORT = 3636;
settings.NAME = 'Heavenvy';
settings.FAKE_INSERT = false;
module.exports = settings;

app.set('views', __dirname + '/views');
app.use('/static', express.static('public'))

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev 
});

var waivers = nano.db.create(settings.COUCHDB_PREFIX+'waivers')
var waivers = nano.use(settings.COUCHDB_PREFIX+'waivers');

var eternities = nano.db.create(settings.COUCHDB_PREFIX+'heavenvies');
var eternities = nano.use(settings.COUCHDB_PREFIX+'heavenvies');

if (settings.LOCAL && settings.FAKE_INSERT && true == false) {
eternities.insert({ title: "hi", message: "message", author: "author" }, function(err, body, header) {
  if (err) {
    console.log('[.insert] ', err.message);
  } else {
      console.log('you have added to the eternities of goodness.', body)
  }
});

}

var eternities_each = [];

eternities.list(function(err, body) {
  if (!err) {
    //eternities_each = body.rows;
    console.log('hi')
    body.rows.forEach(function(doc) {
        //console.log(doc);
        console.log(doc.id);
        eternities.get(doc.id, function(err,eternity) {
            eternities_each.push(eternity);
           console.log(eternity); 
        });
    });
  } else {
      console.log("error", err);
  }
});

// 

// cover page json
 
var venezuela =         {   
                            name: "venezuela", 
                            message: "If you follow immigration patterns in Venezuela you may notice trends leading to the fall of Venezuela.",
                            image: "/static/images/venezuela-364196.jpg",
                            url: "/venezuela"
                        }

var url_structure =     [
                                        //venezuela
                        ]   


//app.get('/', (req, res) => {
//    res.render('index_home', {settings:settings, eternities: eternities_each});
//});

// Venezuela

app.get('/latin-america/', (req, res) => {
    res.render('index_venezuela', {settings:settings, eternities: eternities_each, entity: venezuela});
});

app.get('/latinamerica/', (req, res) => {
    res.render('index_venezuela', {settings:settings, eternities: eternities_each, entity: venezuela});
});

app.get('/gaza/', (req, res) => {
    res.render('index_gaza', {settings:settings, eternities: eternities_gaza_each, entity: venezuela});
});

app.get('/venezuela/', (req, res) => {
    res.render('index_venezuela', {settings:settings, eternities: eternities_each, entity: venezuela});
});

// Home page

app.get('/', (req, res) => {
    res.render('index', {settings:settings, eternities: eternities_each, url_structure: url_structure});
});

// Psychiatry

app.get('/psychiatry/', (req, res) => {
    res.render('index_psychiatry', {settings:settings, eternities: eternities_each});
});

app.listen(3635);
