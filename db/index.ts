import { Pool } from "pg";

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

export default pool;
