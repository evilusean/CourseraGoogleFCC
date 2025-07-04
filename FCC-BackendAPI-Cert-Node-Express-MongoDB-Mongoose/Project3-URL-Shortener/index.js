require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// In-memory storage for URLs
const urlDatabase = {};
let urlCounter = 1;

// URL validation function
function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// POST endpoint to shorten URL
app.post('/api/shorturl', (req, res) => {
  const original_url = req.body.url;
  console.log('POST /api/shorturl - Received URL:', original_url);
  if (!isValidHttpUrl(original_url)) {
    console.log('Invalid URL format');
    return res.json({ error: 'invalid url' });
  }
  let hostname;
  try {
    hostname = new URL(original_url).hostname;
  } catch (e) {
    console.log('URL parsing failed');
    return res.json({ error: 'invalid url' });
  }
  dns.lookup(hostname, (err) => {
    if (err) {
      console.log('DNS lookup failed for:', hostname);
      return res.json({ error: 'invalid url' });
    }
    // Check if URL already exists
    let short_url = Object.keys(urlDatabase).find(key => urlDatabase[key] === original_url);
    if (!short_url) {
      short_url = urlCounter++;
      urlDatabase[short_url] = original_url;
      console.log('New short_url assigned:', short_url);
    } else {
      console.log('Existing short_url found:', short_url);
    }
    res.json({ original_url, short_url: Number(short_url) });
  });
});

// GET endpoint to redirect
app.get('/api/shorturl/:short_url', (req, res) => {
  const short_url = req.params.short_url;
  const original_url = urlDatabase[short_url] || urlDatabase[Number(short_url)];
  console.log('GET /api/shorturl/' + short_url, '->', original_url);
  if (original_url) {
    return res.redirect(original_url);
  } else {
    return res.json({ error: 'invalid url' });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
