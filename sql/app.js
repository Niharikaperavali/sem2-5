const express = require('express');
const cors = require('cors');
const sequelize = require('./config/dbConfig');
const authRoutes = require('./Routes/authRoutes');
const customerdataRoutes = require('./Routes/customerdataRoutes');
const interactionRoutes = require('./Routes/interactionRoutes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customerdata', customerdataRoutes);
app.use('/api/interaction', interactionRoutes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000; // Changed to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sync database
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});