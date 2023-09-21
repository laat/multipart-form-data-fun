const express = require('express');
const multipart = require('connect-multiparty');
const FormData = require('form-data');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(multipart());

app.post('/api', (req, res) => {
  const form = new FormData();
  form.append('hello', `from the server, you typed: ${req.body.hello}`);

  res.set(form.getHeaders());
  form.pipe(res);
});

app.listen(3000, () => console.log('Server running on port 3000'));
