import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

import { recipes } from './recipes';
import { users } from './users';

export const notes = pgTable('note', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  recipeId: text('recipeId')
    .notNull()
    .references(() => recipes.id, { onDelete: 'cascade' }),
  authorId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  issue: text('issue'),
  text: text('text').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
});

export const notesRelations = relations(notes, ({ one }) => ({
  user: one(users, {
    fields: [notes.authorId],
    references: [users.id],
  }),
  recipe: one(recipes, {
    fields: [notes.recipeId],
    references: [recipes.id],
  }),
}));
