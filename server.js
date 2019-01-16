const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
  // res.send('<h1>Hello</h1>')
  res.send({
    name: 'Andrew',
    likes: ['Potatoes','Biking','Cities']
  })
});

app.get('/about', (req,res) => {
  res.send('<h1>About Page</h1>')
})

app.get('/bad',(req,res) => {
  res.send({
    error: "Bad Request"
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
});
