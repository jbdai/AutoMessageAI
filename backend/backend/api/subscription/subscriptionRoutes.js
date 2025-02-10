const express = require('express');
const router = express.Router();

// Mock subscription endpoint
router.get('/status', (req, res) => {
    const { uniqueId } = req.query;
    if (!uniqueId) {
        return res.status(400).json({ error: "Unique ID is required" });
    }
    res.json({ subscription: "Free", tokens: 50 });
});

module.exports = router;
