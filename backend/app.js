import express from 'express';

const app = express();
const port = 5000;
app.get('/single', (req, res) => {
  res.send('hello world');
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
