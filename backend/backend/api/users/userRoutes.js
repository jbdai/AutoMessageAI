const express = require('express');
const router = express.Router();

// Mock user profile endpoint
router.get('/profile', (req, res) => {
    const { uniqueId } = req.query;
    if (!uniqueId) {
        return res.status(400).json({ error: "Unique ID is required" });
    }
    res.json({ uniqueId, name: "User", subscription: "Free", tokens: 50 });
});

module.exports = router;
