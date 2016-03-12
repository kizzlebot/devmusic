var LastFmNode = require('lastfm').LastFmNode;
var request = require('request');
var crypto = require('crypto')

var key ='f74ad94585be959288a43cfbfc18c0e8';
var url = `https://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${key}`;

var lastfm = new LastFmNode({
  api_key: 'f74ad94585be959288a43cfbfc18c0e8',
  secret: '262dff1fc42b5cd9ade56a3455d2d78f'
});



var trackStream = lastfm.stream('phatboyslikepk');
var xml2js = require('xml2js');

request.get(url, (err, res, body) => {
  xml2js.parseString(body, function(err, result){
    var method = 'auth.getSession';
        var token = result.lfm.token[0];
        var unsig = `api_key${process.env.LASTFM_KEY}method${method}token${token}`;
        var sig = crypto.createHash("md5").update(unsig, "utf8").digest("hex");
        console.info('Sig: ' + sig);

        var sessionUrl = `http://www.last.fm/api/auth?api_key=${process.env.LASTFM_KEY}&token=${token}&api_sig=${sig}`;
        console.info('URL: ' + sessionUrl);
        request.get(sessionUrl, (err, res, body) => {
          //console.log(body);
          //res.redirect(`http://www.last.fm/api/auth?api_key=${process.env.LASTFM_KEY}&token=${result.lfm.token[0]}&cb=http://localhost:3000/auth/lastfm`);
        });

      });
    });
/*
var session = lastfm.session({
   token: token,
   handlers: {
     success: function(session) {
       lastfm.update('nowplaying', session, { track: track } );
       lastfm.update('scrobble', session, { track: track, timestamp: 12345678 });
     }
   }
});

var request = lastfm.request("artist.getInfo", {
    artist: "The Mae Shi",
    handlers: {
        success: function(data) {
            console.log("Success: " + data);
        },
        error: function(error) {
            console.log("Error: " + error.message);
        }
    }
});
*/
