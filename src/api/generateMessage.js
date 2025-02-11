const express = require('express');
const router = express.Router();

router.post('/generate', (req, res) => {
  const { recipient, sender, keywords } = req.body;
  // Process the message generation logic here
  const message = `Dear ${recipient}, ${keywords}\nFrom ${sender}`;
  res.json({ message });
});

module.exports = router;
