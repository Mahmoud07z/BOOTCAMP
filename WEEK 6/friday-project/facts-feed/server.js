const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');
const path = require('path');

const app = express();
const parser = new Parser();

const RSS_URL = 'https://thefactfile.org/feed/';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'pages'));

// Helper to fetch feed items
async function fetchPosts() {
  const feed = await parser.parseURL(RSS_URL);
  return feed.items;
}

// Home route — show all posts
app.get('/', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.render('index', { posts });
  } catch (error) {
    res.status(500).send('Error loading posts');
  }
});

// Search page (empty initially)
app.get('/search', (req, res) => {
  res.render('search', { posts: [] });
});

// Search by title
app.post('/search/title', async (req, res) => {
  const title = req.body.title.toLowerCase();
  try {
    const posts = await fetchPosts();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(title)
    );
    res.render('search', { posts: filtered });
  } catch {
    res.status(500).send('Search failed');
  }
});

// Search by category
app.post('/search/category', async (req, res) => {
  const category = req.body.category.toLowerCase();
  try {
    const posts = await fetchPosts();
    const filtered = posts.filter(post =>
      post.categories && post.categories.some(cat => cat.toLowerCase() === category)
    );
    res.render('search', { posts: filtered });
  } catch {
    res.status(500).send('Search failed');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
