const path = require('path');
const express = require('express');
const app = express();

app.use((_, res, next) => {
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use('/examples', express.static('../examples'));
app.use('/lib', express.static('../lib'));

app.get('/', (req, res) => {
  res.status(200);
  res.send('test');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
