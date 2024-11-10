// src/index.ts

import express from 'express';
import cors from 'cors';
import sequelize from './models';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test DB Connection and Sync
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); // { force: true } to drop tables and recreate
  })
  .then(() => {
    console.log('Database synchronized.');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });
