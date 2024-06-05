import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

import env from '@/env.mjs';

const migrationClient = postgres(env.DB_URL!, { max: 1 });
const db = drizzle(migrationClient);

const main = async () => {
  try {
    migrate(db, { migrationsFolder: 'drizzle' });
  } catch (error) {
    console.error('Error during migration:', error);
    process.exit(1);
  } finally {
  }
};

main();
