import { Clock, Ruler, Thermometer } from 'lucide-react';

type TRecipeDetails = {
  time?: string;
  measure?: string;
  temp?: string;
};
export const RecipeDetails = ({ time, temp, measure }: TRecipeDetails) => {
  if (!time && !measure && !temp) return null;

  return (
    <div className="grid gap-3">
      <div className="font-semibold">Dane do gotowania:</div>
      <dl className="grid gap-3">
        {measure && (
          <div className="flex items-center justify-between">
            <dt className="flex items-center justify-center gap-1">
              <Ruler className="size-4" />
              <span className="text-muted-foreground">wymiary</span>
            </dt>
            <dd>{measure}</dd>
          </div>
        )}
        {time && (
          <div className="flex items-center justify-between">
            <dt className="flex items-center justify-center gap-1">
              <Clock className="size-4" />
              <span className="text-muted-foreground">czas</span>
            </dt>
            <dd>
              <a href="mailto:">{time}</a>
            </dd>
          </div>
        )}
        {temp && (
          <div className="flex items-center justify-between">
            <dt className="flex items-center justify-center gap-1">
              <Thermometer className="size-4" />
              <span className="text-muted-foreground">temperatura</span>
            </dt>
            <dd>{temp} &#176;C</dd>
          </div>
        )}
      </dl>
    </div>
  );
};
