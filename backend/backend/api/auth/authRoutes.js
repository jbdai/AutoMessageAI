const express = require('express');
const router = express.Router();

// Mock authentication (Replace with real database logic)
router.post('/login', (req, res) => {
    const { uniqueId } = req.body;
    if (!uniqueId) {
        return res.status(400).json({ error: "Unique ID is required" });
    }
    res.json({ message: "Login successful", uniqueId });
});

module.exports = router;
