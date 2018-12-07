*** Add cron.start.sh to crontab user user heavenvy ***

crontab -e

# add this line
@reboot /home/heavenvy/web/cron.start.sh

*** Install nvm, npm and node ***

Based on express-nunjucks

curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh -o install_nvm.sh
source ~/.profile
nvm install 8.9.4

add to .profile on /root

export NODE_PATH=/root/.nvm/versions/node/v8.9.4/lib/node_modules/


```javascript
const express = require('express');
const expressNunjucks = require('express-nunjucks');
const app = express();
const isDev = app.get('env') === 'development';

app.set('views', __dirname + '/templates');

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3636);
```

*** Development environment ***

1. Install Brackets editor with the livereload:
https://addons.mozilla.org/en-US/firefox/addon/livereload-web-extension/

2. Enable livereload on the side of brackets

3. launch "node ." after installing "npm install express express-nunjucks"

4. Open Firefox to localhost:3636 and activate "livereload" in Firefox

5. Changes auto refresh on saves in Brackets.


*** Why Freeternity ***

Having been extremely ill, I chose to go windsurfing.  I had a momemnt where the wind was blowing and I could feel the tremendous feeling as if I was dancing and flying in a funnel out of the bounds of the Universe.  I could also feel the firmament of creation splitting with the wind blowing in my sail.  It was such a feeling of eccstacy, I said "thank you".  At that moment, I received a new body.  My entire organism which was extremely ill received new veins. There are many windsurfers that surf in their 70s and 80s to attain health, they keep going and the added infusion from the Heavens keeps them young.

*** Waiver ***

No liability either expressed or implied for Heavenvy.
