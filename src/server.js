const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const phoneCatalogRoutes = require('./routes/phoneCatalogRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use('/phone_catalog', phoneCatalogRoutes);

// sequelize.sync({ force: true }).then(() => {
//   console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// });


