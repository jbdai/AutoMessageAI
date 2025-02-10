const express = require('express');
const router = express.Router();

// Get token balance
router.get('/balance', (req, res) => {
    const { uniqueId } = req.query;
    if (!uniqueId) {
        return res.status(400).json({ error: "Unique ID is required" });
    }
    res.json({ tokens: 50 });
});

module.exports = router;
