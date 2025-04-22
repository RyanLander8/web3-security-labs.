const express = require('express');
const app = express();
const port = 3000;

const users = {
  1: { name: 'Alice', balance: 100, wallet: '0x123...abc' },
  2: { name: 'Bob', balance: 200, wallet: '0x456...def' },
};

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (users[userId]) {
    res.json(users[userId]);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
