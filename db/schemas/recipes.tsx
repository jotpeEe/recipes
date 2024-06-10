import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { notes } from './notes';
import { steps } from './steps';

export const recipes = pgTable('recipe', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text('title'),
  prepTime: text('prep_time'),
  cookTime: text('cook_time'),
  servings: integer('servings'),
  tags: text('tags').array(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  images: text('images').array(),
});

export const recipesRelations = relations(recipes, ({ many }) => ({
  steps: many(steps),
  notes: many(notes),
}));
