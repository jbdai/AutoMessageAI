const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const authRoutes = require('./api/auth/authRoutes');
const messageRoutes = require('./api/messages/messageRoutes');
const subscriptionRoutes = require('./api/subscription/subscriptionRoutes');
const tokenRoutes = require('./api/tokens/tokenRoutes');
const userRoutes = require('./api/users/userRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/users', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.send('AutoMessage AI Backend is Running');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
