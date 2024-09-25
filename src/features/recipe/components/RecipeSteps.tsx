'use client';

type TRecipeSteps = {
  steps?: string[];
};

export const RecipeSteps: React.FC<TRecipeSteps> = ({ steps }) => {
  if (!steps) return null;
  return (
    <>
      <div className="font-semibold">Opis:</div>
      <ul className="flex w-fit flex-col items-start justify-center space-y-2">
        {steps.map((paragraph, idx) => (
          <li key={`${idx}-par`} className="flex gap-1">
            <span className="text-muted-foreground">{paragraph}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
