import { relations } from 'drizzle-orm';
import { pgTable, text } from 'drizzle-orm/pg-core';

import { ingredients } from './ingredients';
import { recipes } from './recipes';

export const steps = pgTable('step', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  recipeId: text('recipeId')
    .notNull()
    .references(() => recipes.id, { onDelete: 'cascade' }),
  cathegory: text('cathegory'),
  instructions: text('instructions').array().notNull(),
  temp: text('temp'),
  measure: text('measure'),
  time: text('time'),
});

export const stepsRelations = relations(steps, ({ one, many }) => ({
  recipe: one(recipes, {
    fields: [steps.recipeId],
    references: [recipes.id],
  }),
  ingredients: many(ingredients),
}));
