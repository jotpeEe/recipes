'use server';

import { db } from 'db/drizzle';
import { steps } from 'db/schemas/steps';

export const createStep = async (data: any) => {
  try {
    const res = await db.insert(steps).values(data).returning();

    return {
      success: true,
      steps: res,
    };
  } catch (error) {
    throw new Error(`Failed to create recipe: ${error}`);
  }
};
