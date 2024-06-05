import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import env from '@/env.mjs';

const queryClient = postgres(env.DB_URL!);

export const db = drizzle(queryClient);
