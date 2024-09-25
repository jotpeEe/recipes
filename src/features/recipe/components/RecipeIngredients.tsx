'use client';

import React from 'react';

type TRecipeIngredients = {
  ingredients?: Array<{ name: string; amount: string }>;
};

export const RecipeIngredients = ({ ingredients }: TRecipeIngredients) => {
  if (!ingredients) return null;

  return (
    <>
      <div className="font-semibold">Składniki:</div>
      <ul className="flex w-fit flex-col items-start justify-center">
        {ingredients.map((ingredient, index) => (
          <li key={`${ingredient}-${index}`} className="flex gap-1">
            <span>{ingredient.amount}</span>
            <span className="text-muted-foreground">{ingredient.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
