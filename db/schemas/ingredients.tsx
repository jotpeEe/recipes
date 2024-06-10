import { relations } from 'drizzle-orm';
import { pgTable, text } from 'drizzle-orm/pg-core';

import { steps } from './steps';

export const ingredients = pgTable('ingredient', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  stepId: text('step_id')
    .notNull()
    .references(() => steps.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  amount: text('amount').notNull(),
});

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  step: one(steps, {
    fields: [ingredients.stepId],
    references: [steps.id],
  }),
}));
