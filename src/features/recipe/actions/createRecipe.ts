'use server';

import { db } from '../../../../db/drizzle';
import { recipes } from '../../../../db/schemas/recipes';

export const createRecipe = async (data: any) => {
  const { title, prepTime, cookTime, servings, tags, images, steps: recipeSteps } = data;

  try {
    const [recipe] = await db
      .insert(recipes)
      .values({
        title,
        prepTime,
        cookTime,
        servings,
      })
      .returning();

    return {
      success: true,
      recipe,
    };
  } catch (error) {
    throw new Error(`Failed to create recipe: ${error}`);
  }
};
