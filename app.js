var spotifyApi = new SpotifyWebApi({
  clientId: 'adaa2031064e4b77870ca3d6e3c6c437',
  clientSecret: 'fa412d676ac7436683bee4f837817da7',
  redirectUri: 'https://github.gatech.edu/pages/yjhang3/yjhang3.github.io/web_app.html'
});

const app = express();

app.get('/login', (req, res) => {
  res.redirect(spotifyApi.createAurothizedURL(scopes));
});

app.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.qu
})