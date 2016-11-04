require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgresql://localhost:5432/',
	connection: {
      user: process.env.USER || 'postgres',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgresql://localhost:5432/',
    connection: {
      user: process.env.USER || 'postgres',
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    }
  }
};
