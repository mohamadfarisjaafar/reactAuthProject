// src/models/index.ts

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false, // Disable logging; default: console.log
});

export default sequelize;
