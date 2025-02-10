const express = require('express');
const router = express.Router();

// Generate a message (Mock AI response)
router.post('/generate', (req, res) => {
    const { recipient, sender, keywords } = req.body;
    if (!recipient || !sender || !keywords) {
        return res.status(400).json({ error: "Recipient, sender, and keywords are required" });
    }
    const message = `Dear ${recipient}, ${keywords}. Sincerely, ${sender}`;
    res.json({ message });
});

module.exports = router;
